import HtmlLangSetter from "../HtmlLangSetter";

export default function FrenchLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HtmlLangSetter locale="fr" />
      {children}
    </>
  );
}
