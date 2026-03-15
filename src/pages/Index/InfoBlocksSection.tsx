import { PAGE_TABLE_1, PAGE_TABLE_2 } from '@/constants';
import {
  Activity,
  Building,
  Eye,
  FileText,
  GraduationCap,
  MoreHorizontal,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const infoBlocks = [
  {
    title: 'Вітаємо',
    description:
      'Куликівський ліцей - сучасний навчальний заклад, що забезпечує якісну освіту та всебічний розвиток особистості',
    icon: GraduationCap,
    gradient: 'from-blue-500 to-blue-600',
    link: `/page?titlePages=Про%20ліцей&keyPages=${PAGE_TABLE_2}`,
  },
  {
    title: 'Документація',
    description: 'Повний перелік установчих документів, положень та нормативних актів ліцею',
    icon: FileText,
    gradient: 'from-emerald-500 to-emerald-600',
    link: '/documents',
  },
  {
    title: 'Матеріально-технічна база',
    description: "Сучасне обладнання, комп'ютерні класи, лабораторії та спортивні споруди",
    icon: Building,
    gradient: 'from-purple-500 to-purple-600',
    link: `/page?titlePages=Матеріально-технічна%20база&keyPages=${PAGE_TABLE_2}`,
  },
  {
    title: 'Діяльність',
    description: 'Освітня, виховна та науково-методична діяльність нашого навчального закладу',
    icon: Activity,
    gradient: 'from-orange-500 to-orange-600',
    link: `/page?titlePages=Діяльність&keyPages=${PAGE_TABLE_1}`,
  },
  {
    title: 'Публічна інформація',
    description: 'Відкрита звітність, результати діяльності та публічні документи ліцею',
    icon: Eye,
    gradient: 'from-teal-500 to-teal-600',
    link: `/page?titlePages=Відкритість%20та%20прозорість&keyPages=${PAGE_TABLE_1}`,
  },
  {
    title: 'Більше',
    description: 'Додаткова інформація, корисні посилання та інші матеріали про наш ліцей',
    icon: MoreHorizontal,
    gradient: 'from-pink-500 to-pink-600',
    link: `/page?titlePages=Більше&keyPages=${PAGE_TABLE_2}`,
  },
];

const InfoBlocksSection = () => {
  return (
    <section className="bg-gray-50 py-16 dark:bg-gray-700">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h3 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-400 md:text-4xl">
            Про наш ліцей
          </h3>
          <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-400">
            Ознайомтеся з основними напрямками діяльності та інформацією про Куликівський ліцей
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {infoBlocks.map((block, index) => (
            <div
              key={block.title}
              className="animate-fade-in group overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-600"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`h-2 bg-gradient-to-r ${block.gradient}`}></div>
              <div className="p-6 dark:bg-gray-600">
                <div
                  className={`h-16 w-16 bg-gradient-to-br ${block.gradient} mb-4 flex items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110`}
                >
                  <block.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-gray-400">
                  {block.title}
                </h4>
                <p className="mb-4 leading-relaxed text-gray-600">{block.description}</p>
                <button className="group flex items-center space-x-2 font-semibold text-blue-600 transition-colors duration-200 hover:text-blue-700 dark:text-gray-400">
                  <Link to={block.link} className="flex items-center space-x-2">
                    <span>Детальніше</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoBlocksSection;
