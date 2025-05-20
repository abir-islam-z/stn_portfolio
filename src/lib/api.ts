/**
 * API utility functions to fetch data from the JSON server
 * with fallback to static data when the API is unavailable
 */

// Import static data for fallback
import { IAbout } from "@/components/home-page/about-section";
import { IBlogPost } from "@/components/home-page/blog-section";
import { IContact } from "@/components/home-page/contact-section";
import { IEducation } from "@/components/home-page/education-section";
import { IExperience } from "@/components/home-page/experience-section";
import { IProfile } from "@/components/home-page/hero-section";
import { IProject } from "@/components/home-page/projects-section";
import { ISkillsData } from "@/components/home-page/skills-section";
import staticData from "./staticData";

// Base URL for the JSON server
const API_URL = "http://localhost:3001";

// Generic fetch function with error handling and fallback
async function fetchData<T>(endpoint: string): Promise<T> {
  try {
    // Add a timeout to the fetch request to avoid long waiting times
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000); // 3 second timeout

    const response = await fetch(`${API_URL}/${endpoint}`, {
      signal: controller.signal,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(
        `Server responded with ${response.status}: ${response.statusText}`
      );
    }

    return (await response.json()) as T;
  } catch (error) {
    console.warn(
      `Error fetching ${endpoint} from API, using fallback data:`,
      error
    );

    // Return static fallback data based on the endpoint
    return staticData[endpoint as keyof typeof staticData] as T;
  }
}

// API functions for each data type
export async function getProfile() {
  return fetchData<IProfile>("profile");
}

export async function getAbout() {
  return fetchData<IAbout>("about");
}

export async function getEducation() {
  return fetchData<IEducation>("education");
}

export async function getCareerSummary() {
  return fetchData<IExperience>("career_summary");
}

export async function getExperience() {
  return fetchData<IExperience[]>("experience");
}

export async function getSkills() {
  return fetchData<ISkillsData>("skills");
}

export async function getProjects() {
  return fetchData<IProject[]>("projects");
}

export async function getBlogPosts() {
  return fetchData<IBlogPost[]>("blog");
}

export async function getContact() {
  return fetchData<IContact>("contact");
}

// Function to get all data at once (useful for static generation)
export async function getAllData() {
  try {
    const [
      profile,
      about,
      education,
      career_summary,
      experience,
      skills,
      projects,
      blog,
      contact,
    ] = await Promise.all([
      getProfile(),
      getAbout(),
      getEducation(),
      getCareerSummary(),
      getExperience(),
      getSkills(),
      getProjects(),
      getBlogPosts(),
      getContact(),
    ]);

    return {
      profile,
      about,
      education,
      career_summary,
      experience,
      skills,
      projects,
      blog,
      contact,
    };
  } catch (error) {
    console.error("Error fetching all data:", error);

    // Return all static fallback data
    return staticData;
  }
}
