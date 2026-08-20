type SectionHeadingProps = {
  label: string;
  title: string;
  light?: boolean;
  align?: "left" | "center";
};

export function SectionHeading({ label, title, light = false, align = "left" }: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading--${align}${light ? " section-heading--light" : ""}`}>
      <p className="section-label">{label}</p>
      <h2>{title}</h2>
    </div>
  );
}
