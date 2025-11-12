import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const greenhouses = [
    {
      id: 1,
      name: 'Теплица "Стандарт"',
      size: '3×6 м',
      price: '29 900 ₽',
      description: 'Надёжная теплица из поликарбоната для дачного участка',
      image: 'https://cdn.poehali.dev/projects/d7d377e3-9237-4238-b839-77a9b5b23f04/files/4993db40-fff1-4077-9e14-e083cb520a66.jpg',
      features: ['Поликарбонат 4мм', 'Каркас из стальной трубы', 'Дверь и форточка']
    },
    {
      id: 2,
      name: 'Теплица "Премиум"',
      size: '3×8 м',
      price: '39 900 ₽',
      description: 'Усиленная конструкция для выращивания круглый год',
      image: 'https://cdn.poehali.dev/projects/d7d377e3-9237-4238-b839-77a9b5b23f04/files/28e74a85-31f3-4e81-8f57-f531cb144fb8.jpg',
      features: ['Поликарбонат 6мм', 'Усиленный каркас', 'Автоматические форточки']
    },
    {
      id: 3,
      name: 'Теплица "Мини"',
      size: '2×4 м',
      price: '19 900 ₽',
      description: 'Компактное решение для небольших участков',
      image: 'https://cdn.poehali.dev/projects/d7d377e3-9237-4238-b839-77a9b5b23f04/files/6c418c73-71e2-48ad-a85e-8eff111c6c94.jpg',
      features: ['Поликарбонат 4мм', 'Лёгкий монтаж', 'Компактный размер']
    }
  ];

  const testimonials = [
    {
      name: 'Мария Петрова',
      text: 'Отличная теплица! Собрали за день, уже два года стоит как новая. Урожай огурцов и помидоров радует всю семью!',
      rating: 5
    },
    {
      name: 'Сергей Иванов',
      text: 'Заказывал теплицу Премиум с доставкой и монтажом. Ребята приехали вовремя, собрали быстро и качественно. Рекомендую!',
      rating: 5
    },
    {
      name: 'Ольга Смирнова',
      text: 'Взяли модель Мини для дачи. Компактная, но вместительная. Консультант помог с выбором, всё объяснил. Спасибо!',
      rating: 5
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Наш специалист свяжется с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Sprout" size={32} className="text-primary" />
            <h1 className="text-2xl font-bold text-primary">ТеплицыПро</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#catalog" className="hover:text-primary transition-colors">Каталог</a>
            <a href="#about" className="hover:text-primary transition-colors">О компании</a>
            <a href="#delivery" className="hover:text-primary transition-colors">Доставка</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-secondary hover:bg-secondary/90">
                <Icon name="Phone" size={18} className="mr-2" />
                Заказать звонок
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Заказать консультацию</DialogTitle>
                <DialogDescription>
                  Оставьте свои контакты и наш специалист свяжется с вами
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <Input
                  placeholder="Телефон"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
                <Textarea
                  placeholder="Комментарий (необязательно)"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={3}
                />
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Отправить заявку
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </header>

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Теплицы для богатого урожая
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Качественные теплицы из поликарбоната с доставкой и монтажом по всей России
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Выбрать теплицу
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" variant="outline" className="text-lg px-8 border-2">
                    <Icon name="Calculator" size={20} className="mr-2" />
                    Рассчитать стоимость
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Расчёт стоимости теплицы</DialogTitle>
                    <DialogDescription>
                      Заполните форму и получите точный расчёт с учётом доставки
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input placeholder="Ваше имя" required />
                    <Input placeholder="Телефон" type="tel" required />
                    <Input placeholder="Размер теплицы (например, 3×6)" />
                    <Textarea placeholder="Дополнительные пожелания" rows={3} />
                    <Button type="submit" className="w-full">Получить расчёт</Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Каталог теплиц</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {greenhouses.map((greenhouse, index) => (
              <Card key={greenhouse.id} className="overflow-hidden hover:shadow-xl transition-shadow animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={greenhouse.image}
                    alt={greenhouse.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-secondary text-white px-4 py-2 rounded-full font-bold">
                    {greenhouse.price}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{greenhouse.name}</CardTitle>
                  <CardDescription className="text-lg">{greenhouse.size}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{greenhouse.description}</p>
                  <ul className="space-y-2 mb-6">
                    {greenhouse.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Icon name="Check" size={18} className="text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-primary hover:bg-primary/90">
                        Заказать консультацию
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Консультация по теплице {greenhouse.name}</DialogTitle>
                        <DialogDescription>
                          Наш специалист ответит на все ваши вопросы
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <Input placeholder="Ваше имя" required />
                        <Input placeholder="Телефон" type="tel" required />
                        <Textarea placeholder="Ваш вопрос" rows={3} />
                        <Button type="submit" className="w-full">Отправить</Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">О компании</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Icon name="Award" size={48} className="mx-auto mb-4 text-primary" />
                  <h3 className="text-2xl font-bold mb-2">12 лет</h3>
                  <p className="text-muted-foreground">на рынке теплиц</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Icon name="Users" size={48} className="mx-auto mb-4 text-primary" />
                  <h3 className="text-2xl font-bold mb-2">5000+</h3>
                  <p className="text-muted-foreground">довольных клиентов</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Icon name="Shield" size={48} className="mx-auto mb-4 text-primary" />
                  <h3 className="text-2xl font-bold mb-2">5 лет</h3>
                  <p className="text-muted-foreground">гарантия на каркас</p>
                </CardContent>
              </Card>
            </div>
            <p className="text-lg text-center text-muted-foreground">
              Мы производим качественные теплицы из поликарбоната более 12 лет. 
              Используем только проверенные материалы и предоставляем полный цикл услуг: 
              от консультации до монтажа на вашем участке.
            </p>
          </div>
        </div>
      </section>

      <section id="delivery" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Доставка и монтаж</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={32} className="text-primary" />
                </div>
                <h3 className="font-bold mb-2">1. Заявка</h3>
                <p className="text-sm text-muted-foreground">Оставьте заявку на сайте или позвоните нам</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="MessageSquare" size={32} className="text-primary" />
                </div>
                <h3 className="font-bold mb-2">2. Консультация</h3>
                <p className="text-sm text-muted-foreground">Специалист поможет выбрать теплицу</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Truck" size={32} className="text-primary" />
                </div>
                <h3 className="font-bold mb-2">3. Доставка</h3>
                <p className="text-sm text-muted-foreground">Привезём теплицу в удобное время</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Wrench" size={32} className="text-primary" />
                </div>
                <h3 className="font-bold mb-2">4. Монтаж</h3>
                <p className="text-sm text-muted-foreground">Соберём теплицу за 4-6 часов</p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 max-w-3xl mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-xl">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                  <Icon name="MapPin" size={24} className="text-primary" />
                  География доставки
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-primary" />
                    Москва и область - бесплатно
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-primary" />
                    Центральная Россия - от 3000 ₽
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-primary" />
                    Вся Россия - расчёт индивидуально
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                  <Icon name="Hammer" size={24} className="text-primary" />
                  Услуги монтажа
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-primary" />
                    Подготовка основания
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-primary" />
                    Сборка каркаса
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-primary" />
                    Установка поликарбоната
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Отзывы клиентов</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-secondary fill-secondary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">{testimonial.text}</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Контакты</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Свяжитесь с нами</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={24} className="text-primary" />
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <a href="tel:+79991234567" className="text-muted-foreground hover:text-primary">+7 (999) 123-45-67</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={24} className="text-primary" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:info@teplici.ru" className="text-muted-foreground hover:text-primary">info@teplici.ru</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" size={24} className="text-primary" />
                  <div>
                    <p className="font-semibold">Адрес</p>
                    <p className="text-muted-foreground">г. Москва, ул. Садовая, д. 15</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Clock" size={24} className="text-primary" />
                  <div>
                    <p className="font-semibold">Режим работы</p>
                    <p className="text-muted-foreground">Пн-Вс: 9:00 - 20:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Задайте вопрос</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                  <Input
                    placeholder="Телефон"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                  <Textarea
                    placeholder="Ваш вопрос"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    required
                  />
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Sprout" size={32} className="text-primary" />
                <h3 className="text-xl font-bold">ТеплицыПро</h3>
              </div>
              <p className="text-background/70">Качественные теплицы для вашего урожая</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <nav className="flex flex-col gap-2">
                <a href="#catalog" className="text-background/70 hover:text-primary transition-colors">Каталог</a>
                <a href="#about" className="text-background/70 hover:text-primary transition-colors">О компании</a>
                <a href="#delivery" className="text-background/70 hover:text-primary transition-colors">Доставка</a>
                <a href="#reviews" className="text-background/70 hover:text-primary transition-colors">Отзывы</a>
              </nav>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-background/70">
                <p>+7 (999) 123-45-67</p>
                <p>info@teplici.ru</p>
                <p>Москва, ул. Садовая, д. 15</p>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-background/50">
            <p>© 2024 ТеплицыПро. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
