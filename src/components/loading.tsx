export default function Loading() {
  return (
    <section
      id="skills"
      className="py-24 bg-muted/30 dark:bg-black/50 relative"
    >
      <div className="container mx-auto px-6 z-10 relative">
        <div className="flex justify-center items-center min-h-[300px]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </div>
    </section>
  );
}
