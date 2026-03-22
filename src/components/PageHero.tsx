type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

const PageHero = ({ eyebrow, title, description }: PageHeroProps) => {
  return (
    <section className="pt-36 pb-20 px-6 border-b border-border/20">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-ui text-[10px] text-gold mb-8 tracking-[0.3em]">
          {eyebrow}
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-light tracking-tighter mb-8">
          {title}
        </h1>
        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
};

export default PageHero;
