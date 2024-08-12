import { DocsSideBar } from "@/app/docs/DocsSideBar";

export default function docsLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col md:flex-row h-screen">
      <aside className="hidden md:block md:w-1/4 h-full bg-stone-50 dark:bg-stone-950">
        <DocsSideBar />
      </aside>
      <main className="ml-8 w-full md:w-3/4 h-full overflow-y-auto">
        {children}
      </main>
    </section>
  );
}
