import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const greenhouseData = [
  {
    id: 1,
    name: 'Теплица "Стандарт"',
    image: 'https://cdn.poehali.dev/projects/d7d377e3-9237-4238-b839-77a9b5b23f04/files/fb2c27ee-693c-4751-b758-7c80432308ac.jpg',
    price: '25 000',
    size: '3x4 м',
    material: 'Поликарбонат 4мм',
    frame: 'Оцинкованная труба 20х20',
    features: ['Раздвижные двери', 'Форточки для проветривания', 'Усиленный каркас'],
    category: 'small'
  },
  {
    id: 2,
    name: 'Теплица "Премиум"',
    image: 'https://cdn.poehali.dev/projects/d7d377e3-9237-4238-b839-77a9b5b23f04/files/0dd95515-6569-4c56-a737-78c145eb7f3d.jpg',
    price: '45 000',
    size: '3x6 м',
    material: 'Поликарбонат 6мм',
    frame: 'Оцинкованная труба 25х25',
    features: ['Автоматические форточки', 'Двойные двери', 'Снегозадержатели', 'Капельный полив'],
    category: 'medium'
  },
  {
    id: 3,
    name: 'Теплица "Комфорт"',
    image: 'https://cdn.poehali.dev/projects/d7d377e3-9237-4238-b839-77a9b5b23f04/files/f3ac52e5-caac-414b-ba50-88fcf6994bb5.jpg',
    price: '32 000',
    size: '3x4 м',
    material: 'Поликарбонат 4мм',
    frame: 'Оцинкованная труба 20х20',
    features: ['2 форточки', 'Усиленное основание', 'Раздвижная дверь'],
    category: 'small'
  },
  {
    id: 4,
    name: 'Теплица "Фермер"',
    image: 'https://cdn.poehali.dev/projects/d7d377e3-9237-4238-b839-77a9b5b23f04/files/0dd95515-6569-4c56-a737-78c145eb7f3d.jpg',
    price: '65 000',
    size: '3x8 м',
    material: 'Поликарбонат 8мм',
    frame: 'Оцинкованная труба 30х30',
    features: ['Профессиональный каркас', 'Система автополива', '4 форточки', 'Термопривод'],
    category: 'large'
  },
  {
    id: 5,
    name: 'Теплица "Компакт"',
    image: 'https://cdn.poehali.dev/projects/d7d377e3-9237-4238-b839-77a9b5b23f04/files/fb2c27ee-693c-4751-b758-7c80432308ac.jpg',
    price: '18 000',
    size: '2x3 м',
    material: 'Поликарбонат 4мм',
    frame: 'Оцинкованная труба 20х20',
    features: ['Компактный размер', '1 форточка', 'Легкая установка'],
    category: 'small'
  },
  {
    id: 6,
    name: 'Теплица "Урожай XL"',
    image: 'https://cdn.poehali.dev/projects/d7d377e3-9237-4238-b839-77a9b5b23f04/files/0dd95515-6569-4c56-a737-78c145eb7f3d.jpg',
    price: '85 000',
    size: '3x10 м',
    material: 'Поликарбонат 10мм',
    frame: 'Оцинкованная труба 40х40',
    features: ['Максимальная прочность', 'Автоматическая вентиляция', 'Система обогрева', 'Капельный полив'],
    category: 'large'
  }
];

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredGreenhouses = selectedCategory === 'all' 
    ? greenhouseData 
    : greenhouseData.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-primary flex items-center gap-2">
            <Icon name="Sprout" size={32} />
            ГринХаус
          </a>
          <nav className="hidden md:flex items-center gap-6">
            <a href="/" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="/catalog" className="text-primary font-semibold">Каталог</a>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90">
              <Icon name="Phone" size={18} className="mr-2" />
              Позвонить
            </Button>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </header>

      <section className="py-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Каталог теплиц
          </h1>
          <p className="text-center text-muted-foreground text-lg mb-8">
            Выберите идеальную теплицу для вашего участка
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button 
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('all')}
              size="lg"
            >
              Все теплицы
            </Button>
            <Button 
              variant={selectedCategory === 'small' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('small')}
              size="lg"
            >
              Компактные
            </Button>
            <Button 
              variant={selectedCategory === 'medium' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('medium')}
              size="lg"
            >
              Средние
            </Button>
            <Button 
              variant={selectedCategory === 'large' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('large')}
              size="lg"
            >
              Большие
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGreenhouses.map((greenhouse) => (
              <Card key={greenhouse.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={greenhouse.image} 
                    alt={greenhouse.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-bold">
                    {greenhouse.price} ₽
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4">{greenhouse.name}</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Maximize2" size={18} className="text-primary" />
                      <span>Размер: {greenhouse.size}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Layers" size={18} className="text-primary" />
                      <span>{greenhouse.material}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Box" size={18} className="text-primary" />
                      <span>{greenhouse.frame}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Особенности:</h4>
                    <ul className="space-y-1">
                      {greenhouse.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Не нашли подходящую теплицу?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Мы изготовим теплицу по вашим индивидуальным размерам
          </p>
          <Button size="lg" className="bg-secondary hover:bg-secondary/90">
            <Icon name="MessageCircle" size={20} className="mr-2" />
            Получить консультацию
          </Button>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-xl font-bold mb-4">ГринХаус</h3>
              <p className="opacity-90">Качественные теплицы для вашего урожая</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Контакты</h3>
              <p className="opacity-90">+7 (999) 123-45-67</p>
              <p className="opacity-90">info@greenhouse.ru</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Режим работы</h3>
              <p className="opacity-90">Пн-Пт: 9:00 - 18:00</p>
              <p className="opacity-90">Сб-Вс: 10:00 - 16:00</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Catalog;
