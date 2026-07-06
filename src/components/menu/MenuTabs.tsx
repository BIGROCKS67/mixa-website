"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { menuTabs } from "@/data/menus";
import { AllergenBadges, AllergenKey } from "@/components/menu/AllergenBadges";

export function MenuTabs() {
  const [activeTab, setActiveTab] = useState(menuTabs[0].id);
  const current = menuTabs.find((tab) => tab.id === activeTab) ?? menuTabs[0];

  return (
    <div>
      <div className="-mx-4 flex gap-2 overflow-x-auto border-b border-pepper/10 px-4 pb-4 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
        {menuTabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "font-title rounded-sm px-4 py-2 text-[11px] transition-colors touch-manipulation",
              activeTab === tab.id
                ? "bg-oregano text-white"
                : "bg-mint/40 text-pepper hover:bg-mint/70"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "food" && <AllergenKey />}

      <div className="mt-10 space-y-12">
        {current.sections.map((section) => (
          <section key={section.id} id={section.id}>
            <h2 className="font-heading text-2xl text-pepper">{section.title}</h2>
            {section.note && (
              <p className="font-body mt-2 max-w-3xl text-sm leading-relaxed text-pepper/65">{section.note}</p>
            )}

            <div className="mt-6 divide-y divide-pepper/10">
              {section.items.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col gap-2 py-5 sm:flex-row sm:items-start sm:justify-between"
                >
                  <div className="max-w-2xl">
                    <h3 className="font-heading text-lg text-pepper">{item.name}</h3>
                    {item.description && (
                      <p className="font-body mt-1 text-sm leading-relaxed text-pepper/65">{item.description}</p>
                    )}
                    <AllergenBadges dietary={item.dietary} allergens={item.allergens} />
                  </div>
                  {item.price && (
                    <span className="font-heading shrink-0 text-sm text-oregano">
                      {item.price.startsWith("£") ? item.price : `£${item.price}`}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
