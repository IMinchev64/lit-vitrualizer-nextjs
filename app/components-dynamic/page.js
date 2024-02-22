"use client";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import dynamic from "next/dynamic";

export default function ComponentsPage() {
  const IgButton = dynamic(
    async () => {
      const IgButtonModule = await import("igniteui-react").then((module) => module.IgrButtonModule);
      IgButtonModule.register();
      return import("igniteui-react").then((module) => module.IgrButton);
    }
  );
  const IgBadge = dynamic(
    async () => {
      const IgBadgeModule = await import("igniteui-react").then((module) => module.IgrBadgeModule);
      IgBadgeModule.register();
      return import("igniteui-react").then((module) => module.IgrBadge);
    }
  );

  return (
    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
      <IgButton variant="contained">
        <span key="title">This is a title</span>
      </IgButton>
      <IgBadge variant="success">
        <span key="titleBadge">5</span>
      </IgBadge>
    </div>
  );
}
