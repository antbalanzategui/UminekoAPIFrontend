import * as React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

const sections = [
  {
    header: "Getting Started",
    links: ["Introduction", "Examples"],
  },
  {
    header: "API",
    links: ["Structure", "Error handling", "Headers", "Server Endpoint"],
  },
  {
    header: "Authentication",
    links: ["API Keys", "OAuth"],
  },
  {
    header: "Rate Limiting",
    links: ["Overview", "Handling Limits"],
  },
  {
    header: "Usage Guidelines",
    links: ["Best Practices", "Restrictions"],
  },
  {
    header: "FAQ",
    links: ["General Questions", "Technical Questions"],
  },
  {
    header: "Changelog",
    links: ["Version 1.0", "Version 1.1"],
  },
  {
    header: "Code Examples",
    links: ["JavaScript", "Python", "Ruby"],
  },
  {
    header: "Error Codes",
    links: ["Error Code List", "Handling Errors"],
  },
  {
    header: "Support and Community",
    links: ["Getting Support", "Community Resources"],
  },
  {
    header: "Glossary",
    links: ["Terms and Definitions"],
  },
  {
    header: "Contributing",
    links: ["Contribution Guidelines"],
  },
  {
    header: "Schema and Data Types",
    links: ["Data Structures", "Data Types"],
  },
  {
    header: "Pagination",
    links: ["Handling Pagination"],
  },
  {
    header: "Routes",
    links: [
      "Character",
      "Episode",
      "Images",
      "Information",
      "Relationships",
      "Soundtrack",
      "Statements",
      "Trivia",
    ],
  },
];

export function DocsSideBar() {
  return (
    <ScrollArea className="h-screen rounded-md">
      <div className="p-4">
        {sections.map((section, index) => (
          <div key={index} className="mb-6 text-left ml-16">
            <h4 className="mb-2 text-sm font-medium leading-none text-left">
              {section.header}
            </h4>
            <div className="flex flex-col items-left">
              {section.links.map((link, idx) => (
                <div key={idx} className="text-sm my-1 text-stone-600 dark:text-stone-300 transition-colors duration-300 hover:text-black dark:hover:text-white">
                  {link}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
