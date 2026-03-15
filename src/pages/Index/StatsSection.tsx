const stats = [
  { number: '750+', label: 'Учнів' },
  { number: '80+', label: 'Викладачів' },
  { number: '25', label: 'Років досвіду' },
  { number: '95%', label: 'Успішність' },
];

const StatsSection = () => {
  return (
    <section className="py-16 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="animate-scale-in text-center"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-2 text-3xl font-bold text-blue-600 md:text-4xl">
                {stat.number}
              </div>
              <div className="font-medium text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
