type SimpleTextSectionProps = {
  title: string;
  paragraphs: string[];
};

const SimpleTextSection = ({ title, paragraphs }: SimpleTextSectionProps) => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-light mb-10">{title}</h2>
        <div className="space-y-6 text-lg text-muted-foreground max-w-[65ch]">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimpleTextSection;
