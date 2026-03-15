import { PAGE_TABLE_1 } from '@/constants';
import { Award, ChevronRight, Clock, GraduationCap, MapPin, Star, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { PAGE_TABLE_2 } from '@/constants';

const SchoolShowcaseSection = () => {
  return (
    <section className="bg-white py-16 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* School Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/assets/images/school_summer.jpg"
                alt="Куликівський ліцей"
                className="h-96 w-full transform object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span className="text-sm font-medium dark:text-gray-400">
                    вул. Шевченка, 4, Куликівка
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -right-6 rounded-xl border border-gray-100 bg-white p-6 shadow-[0_4px_12px_rgba(0,0,0,0.15)] dark:border-gray-700 dark:bg-gray-900 dark:shadow-[0_4px_12px_rgba(255,255,255,0.1)]">
              <div className="flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-gray-400">25+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-500">Років досвіду</div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Content */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-400">
                Наш навчальний заклад
              </h3>
              <p className="mb-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                Куликівський ліцей - це місце, де традиції поєднуються з інноваціями. Ми пишаємося
                нашою історією та прагнемо до постійного розвитку.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Link
                to={`/page?titlePages=Учні&keyPages=${PAGE_TABLE_1}`}
                className="cursor-pointer rounded-lg bg-blue-50 p-4 text-center transition-colors hover:bg-blue-100 dark:bg-gray-700"
              >
                <Users className="mx-auto mb-2 h-8 w-8 text-blue-600" />
                <div className="text-2xl font-bold text-green-600">750+</div>
                <div className="text-sm text-gray-600 dark:text-gray-500">Учнів</div>
              </Link>
              <Link
                to={`/page?titlePages=Учительська&keyPages=${PAGE_TABLE_1}`}
                className="cursor-pointer rounded-lg bg-green-50 p-4 text-center transition-colors hover:bg-green-100 dark:bg-gray-700"
              >
                <GraduationCap className="mx-auto mb-2 h-8 w-8 text-green-600" />
                <div className="text-2xl font-bold text-green-600">80+</div>
                <div className="text-sm text-gray-600 dark:text-gray-500">Викладачів</div>
              </Link>
            </div>

            {/* Interactive Highlights */}
            <div className="space-y-3">
              <Link
                to={`/page?titlePages=Розклад%20дзвінків&keyPages=${PAGE_TABLE_1}`}
                className="group flex cursor-pointer items-center justify-between rounded-lg bg-gray-50 p-4 transition-colors hover:bg-gray-100 dark:bg-gray-700"
              >
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-300">
                    <Clock className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-gray-400">
                      Режим роботи
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-500">
                      Пн-Пт: 8:00 - 17:00
                    </div>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400 transition-colors group-hover:text-gray-600" />
              </Link>

              <Link
                to="/schedule2"
                className="group flex cursor-pointer items-center justify-between rounded-lg bg-gray-50 p-4 transition-colors hover:bg-gray-100 dark:bg-gray-700"
              >
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-300">
                    <Star className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-gray-400">
                      Розклад уроків
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-500">
                      Доступний онлайн зі змінами
                    </div>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400 transition-colors group-hover:text-gray-600" />
              </Link>

              <div className="group flex cursor-pointer items-center justify-between rounded-lg bg-gray-50 p-4 transition-colors hover:bg-gray-100 dark:bg-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-500">
                    <Star className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-gray-400">
                      Рейтинг успішності
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-500">
                      95% випускників вступають до ВНЗ
                    </div>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400 transition-colors group-hover:text-gray-600" />
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button
                asChild
                className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl dark:from-gray-600 dark:to-gray-700 dark:text-gray-400 dark:hover:from-gray-600 dark:hover:to-gray-700"
              >
                <Link to={`/page?titlePages=Про%20ліцей&keyPages=${PAGE_TABLE_2}`}>
                  Дізнатися про ліцей детальніше
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolShowcaseSection;
