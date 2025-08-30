import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Icon from '@/components/ui/icon'

const Index = () => {
  const [activeSection, setActiveSection] = useState('editor')
  
  const sections = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'editor', label: 'Редактор', icon: 'PenTool' },
    { id: 'characters', label: 'Персонажи', icon: 'User' },
    { id: 'maps', label: 'Карты', icon: 'Map' },
    { id: 'blocks', label: 'Блоки', icon: 'Box' },
    { id: 'items', label: 'Предметы', icon: 'Package' },
    { id: 'gallery', label: 'Галерея', icon: 'Image' },
    { id: 'download', label: 'Скачать', icon: 'Download' }
  ]

  const characters = [
    { name: 'Воин', type: 'Боец', preview: '⚔️' },
    { name: 'Маг', type: 'Заклинатель', preview: '🧙' },
    { name: 'Лучник', type: 'Стрелок', preview: '🏹' },
    { name: 'Вор', type: 'Скрытность', preview: '🗡️' }
  ]

  const blocks = [
    { name: 'Камень', category: 'Материалы', preview: '⬜' },
    { name: 'Дерево', category: 'Материалы', preview: '🟫' },
    { name: 'Лава', category: 'Жидкости', preview: '🟥' },
    { name: 'Трава', category: 'Природа', preview: '🟩' }
  ]

  const maps = [
    { name: 'Пустыня', type: 'Открытый мир', preview: '🏜️' },
    { name: 'Лес', type: 'Природный', preview: '🌲' },
    { name: 'Город', type: 'Урбанистический', preview: '🏙️' },
    { name: 'Подземелье', type: 'Закрытый', preview: '🕳️' }
  ]

  const projects = [
    { name: 'Космическая Одиссея', genre: 'Sci-Fi', status: 'Готов' },
    { name: 'Магический Квест', genre: 'Fantasy', status: 'В разработке' },
    { name: 'Выживание 2077', genre: 'Survival', status: 'Готов' }
  ]

  return (
    <div className="min-h-screen bg-game-gradient text-white">
      {/* Header */}
      <header className="border-b border-neon-cyan/20 bg-game-dark/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-neon-gradient rounded-lg flex items-center justify-center animate-neon-glow">
                <Icon name="Gamepad2" size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-neon-gradient bg-clip-text text-transparent">
                3D Game Constructor
              </h1>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10">
                <Icon name="Play" size={16} className="mr-2" />
                Тестировать
              </Button>
              <Button className="bg-neon-gradient hover:opacity-90 text-white">
                <Icon name="Save" size={16} className="mr-2" />
                Сохранить
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="border-b border-neon-purple/20 bg-game-dark/50">
        <div className="container mx-auto px-6">
          <div className="flex space-x-1 overflow-x-auto py-2">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant={activeSection === section.id ? "default" : "ghost"}
                className={`flex items-center space-x-2 whitespace-nowrap ${
                  activeSection === section.id 
                    ? 'bg-neon-gradient text-white' 
                    : 'text-gray-300 hover:text-neon-cyan hover:bg-neon-cyan/10'
                }`}
                onClick={() => setActiveSection(section.id)}
              >
                <Icon name={section.icon as any} size={16} />
                <span>{section.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {activeSection === 'home' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center space-y-4">
              <h2 className="text-5xl font-bold bg-neon-gradient bg-clip-text text-transparent animate-neon-glow">
                Создай свою игру мечты
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Конструктор 3D игр с реалистичной физикой. Без программирования, с полным контролем.
              </p>
              <div className="flex justify-center space-x-4 mt-6">
                <Button 
                  size="lg" 
                  className="bg-neon-gradient hover:opacity-90 text-white px-8 py-3"
                  onClick={() => setActiveSection('editor')}
                >
                  <Icon name="Rocket" size={20} className="mr-2" />
                  Начать создание
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 px-8 py-3"
                >
                  <Icon name="Play" size={20} className="mr-2" />
                  Посмотреть примеры
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-game-dark/80 border-neon-cyan/30 hover:border-neon-cyan/60 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-neon-cyan/20 rounded-lg flex items-center justify-center mb-2">
                    <Icon name="Zap" size={24} className="text-neon-cyan" />
                  </div>
                  <CardTitle className="text-neon-cyan">Быстрое создание</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Создавайте игры за минуты, а не месяцы. Простой drag-and-drop интерфейс.</p>
                </CardContent>
              </Card>

              <Card className="bg-game-dark/80 border-neon-purple/30 hover:border-neon-purple/60 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-neon-purple/20 rounded-lg flex items-center justify-center mb-2">
                    <Icon name="Cpu" size={24} className="text-neon-purple" />
                  </div>
                  <CardTitle className="text-neon-purple">Реалистичная физика</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Продвинутый физический движок с реалистичными взаимодействиями объектов.</p>
                </CardContent>
              </Card>

              <Card className="bg-game-dark/80 border-neon-pink/30 hover:border-neon-pink/60 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-neon-pink/20 rounded-lg flex items-center justify-center mb-2">
                    <Icon name="Download" size={24} className="text-neon-pink" />
                  </div>
                  <CardTitle className="text-neon-pink">Экспорт везде</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Экспортируйте игры для ПК, мобильных устройств и веб-браузеров.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeSection === 'editor' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-neon-cyan">3D Редактор</h2>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="border-neon-yellow text-neon-yellow">
                  <Icon name="Grid3X3" size={16} className="mr-2" />
                  Сетка
                </Button>
                <Button variant="outline" size="sm" className="border-neon-green text-neon-green">
                  <Icon name="Move3D" size={16} className="mr-2" />
                  3D вид
                </Button>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-4 gap-6 h-[600px]">
              <Card className="lg:col-span-3 bg-game-dark/50 border-neon-cyan/30">
                <CardContent className="p-6 h-full">
                  <div className="bg-game-darker rounded-lg h-full flex items-center justify-center border border-neon-cyan/20">
                    <img 
                      src="/img/e2f0569a-aef6-4cb7-9072-db1165ce129e.jpg" 
                      alt="3D Editor Viewport"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </CardContent>
              </Card>
              
              <div className="space-y-4">
                <Card className="bg-game-dark/80 border-neon-purple/30">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-neon-purple">Инструменты</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-neon-cyan">
                      <Icon name="MousePointer" size={16} className="mr-2" />
                      Выделение
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-neon-cyan">
                      <Icon name="Move" size={16} className="mr-2" />
                      Перемещение
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-neon-cyan">
                      <Icon name="RotateCw" size={16} className="mr-2" />
                      Поворот
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-neon-cyan">
                      <Icon name="Scale" size={16} className="mr-2" />
                      Масштаб
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-game-dark/80 border-neon-yellow/30">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-neon-yellow">Физика</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Гравитация</span>
                      <span className="text-neon-yellow">-9.8</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Трение</span>
                      <span className="text-neon-yellow">0.6</span>
                    </div>
                    <Button size="sm" className="w-full bg-neon-yellow/20 text-neon-yellow border-neon-yellow/30">
                      <Icon name="Play" size={14} className="mr-2" />
                      Симуляция
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'characters' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold text-neon-cyan">Персонажи</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {characters.map((character, index) => (
                <Card key={index} className="bg-game-dark/80 border-neon-cyan/30 hover:border-neon-cyan/60 transition-colors cursor-pointer group">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="text-4xl group-hover:scale-110 transition-transform">
                      {character.preview}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{character.name}</h3>
                      <Badge variant="outline" className="mt-1 border-neon-cyan/50 text-neon-cyan">
                        {character.type}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'maps' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold text-neon-green">Карты мира</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {maps.map((map, index) => (
                <Card key={index} className="bg-game-dark/80 border-neon-green/30 hover:border-neon-green/60 transition-colors cursor-pointer group">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="text-4xl group-hover:scale-110 transition-transform">
                      {map.preview}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{map.name}</h3>
                      <Badge variant="outline" className="mt-1 border-neon-green/50 text-neon-green">
                        {map.type}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'blocks' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold text-neon-purple">Строительные блоки</h2>
            <Tabs defaultValue="materials" className="space-y-4">
              <TabsList className="bg-game-dark/80 border border-neon-purple/30">
                <TabsTrigger value="materials" className="data-[state=active]:bg-neon-purple/20 data-[state=active]:text-neon-purple">
                  Материалы
                </TabsTrigger>
                <TabsTrigger value="liquids" className="data-[state=active]:bg-neon-purple/20 data-[state=active]:text-neon-purple">
                  Жидкости
                </TabsTrigger>
                <TabsTrigger value="nature" className="data-[state=active]:bg-neon-purple/20 data-[state=active]:text-neon-purple">
                  Природа
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="materials" className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {blocks.filter(b => b.category === 'Материалы').map((block, index) => (
                  <Card key={index} className="bg-game-dark/80 border-neon-purple/30 hover:border-neon-purple/60 transition-colors cursor-pointer group">
                    <CardContent className="p-6 text-center space-y-4">
                      <div className="text-4xl group-hover:scale-110 transition-transform">
                        {block.preview}
                      </div>
                      <h3 className="font-semibold text-white">{block.name}</h3>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        )}

        {activeSection === 'items' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold text-neon-pink">Игровые предметы</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-4">
              {['⚔️', '🛡️', '💎', '🗝️', '💰', '🏺'].map((item, index) => (
                <Card key={index} className="bg-game-dark/80 border-neon-pink/30 hover:border-neon-pink/60 transition-colors cursor-pointer group">
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl group-hover:scale-110 transition-transform">
                      {item}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'gallery' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold text-neon-yellow">Галерея проектов</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card key={index} className="bg-game-dark/80 border-neon-yellow/30 hover:border-neon-yellow/60 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-white">{project.name}</CardTitle>
                    <CardDescription className="text-gray-400">{project.genre}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Badge 
                      variant={project.status === 'Готов' ? 'default' : 'outline'}
                      className={project.status === 'Готов' 
                        ? 'bg-neon-green/20 text-neon-green border-neon-green/50' 
                        : 'border-neon-yellow/50 text-neon-yellow'
                      }
                    >
                      {project.status}
                    </Badge>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="border-neon-yellow/50 text-neon-yellow hover:bg-neon-yellow/10">
                        <Icon name="Play" size={14} className="mr-1" />
                        Играть
                      </Button>
                      <Button size="sm" variant="outline" className="border-neon-yellow/50 text-neon-yellow hover:bg-neon-yellow/10">
                        <Icon name="Edit" size={14} className="mr-1" />
                        Редактировать
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'download' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold text-neon-green">Экспорт игры</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-game-dark/80 border-neon-green/30">
                <CardHeader>
                  <CardTitle className="text-neon-green flex items-center">
                    <Icon name="Monitor" size={20} className="mr-2" />
                    PC / Mac
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300 text-sm">Экспорт для настольных компьютеров</p>
                  <Button className="w-full bg-neon-green/20 text-neon-green border-neon-green/30">
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать .exe
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-game-dark/80 border-neon-cyan/30">
                <CardHeader>
                  <CardTitle className="text-neon-cyan flex items-center">
                    <Icon name="Smartphone" size={20} className="mr-2" />
                    Мобильные
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300 text-sm">APK для Android и iOS</p>
                  <Button className="w-full bg-neon-cyan/20 text-neon-cyan border-neon-cyan/30">
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать .apk
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-game-dark/80 border-neon-purple/30">
                <CardHeader>
                  <CardTitle className="text-neon-purple flex items-center">
                    <Icon name="Globe" size={20} className="mr-2" />
                    Веб-версия
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300 text-sm">HTML5 для браузеров</p>
                  <Button className="w-full bg-neon-purple/20 text-neon-purple border-neon-purple/30">
                    <Icon name="Upload" size={16} className="mr-2" />
                    Опубликовать
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-neon-cyan/20 bg-game-dark/80 mt-16">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center text-gray-400">
            <p>3D Game Constructor • Создано с ❤️ для геймеров</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index