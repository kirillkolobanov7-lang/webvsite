import { ArrowUpRight, Bot, ChartNoAxesCombined, Package, Search, ShieldCheck, Zap, Download, Send, Sparkles } from "lucide-react";

const features = [
  { icon: Bot, title: "ИИ-ассистент", text: "Контекстные ответы покупателям и помощь в работе с отзывами." },
  { icon: Package, title: "Управление лотами", text: "Создание, редактирование и улучшение описаний товаров." },
  { icon: Search, title: "Исследование рынка", text: "Поиск идей и анализ доступных игровых категорий." },
  { icon: ChartNoAxesCombined, title: "Аналитика", text: "Заказы, подтверждения и финансовые показатели в одном месте." },
];
const tg = process.env.NEXT_PUBLIC_TELEGRAM_USERNAME || "onfuy";
const download = process.env.NEXT_PUBLIC_DOWNLOAD_URL;

export default function Home() {
  return <main>
    <nav className="nav wrap">
      <a className="brand" href="#"><span className="brand-mark">L</span><span>LUFFY<span className="purple">RESELLER</span></span></a>
      <div className="nav-links"><a href="#features">Возможности</a><a href="#how">Как работает</a><a href="#faq">FAQ</a></div>
      <a className="nav-cta" href={`https://t.me/${tg}`} target="_blank" rel="noreferrer">Связаться <ArrowUpRight size={16}/></a>
    </nav>
    <section className="hero wrap">
      <div className="hero-copy">
        <div className="eyebrow"><span className="pulse"/> AI-POWERED RESELLING PLATFORM</div>
        <h1>Торговля нового поколения <span className="gradient">начинается здесь.</span></h1>
        <p className="lead">LuffyReseller — интеллектуальный центр управления продажами, лотами и общением с покупателями.</p>
        <div className="actions">
          <a className="button primary" href={`https://t.me/${tg}`} target="_blank" rel="noreferrer"><Sparkles size={17}/> Купить лицензию</a>
          <a className="button secondary" href={download || "#download"}>{download ? <Download size={17}/> : <ShieldCheck size={17}/>} {download ? "Скачать приложение" : "Скоро доступно"}</a>
        </div>
        <div className="trust"><span><ShieldCheck size={15}/> Лицензионный доступ</span><span><Zap size={15}/> AI-инструменты</span><span>Windows 10 / 11</span></div>
      </div>
      <div className="hero-art">
        <div className="orb orb-one"/><div className="orb orb-two"/>
        <div className="dashboard">
          <div className="dash-top"><span className="dots">● ● ●</span><span>LUFFY / OVERVIEW</span><span className="live">● SYSTEM</span></div>
          <div className="dash-title">Добро пожаловать</div><div className="dash-sub">Твоя торговля. Твои правила. Твой ИИ.</div>
          <div className="stats"><div><small>ЗАКАЗЫ</small><b>—</b><em>Подключи FunPay</em></div><div><small>ДОХОД</small><b>—</b><em>Ожидает данных</em></div></div>
          <div className="activity"><div className="activity-head"><b>AI Assistant</b><span>DEMO PREVIEW</span></div><div className="msg"><i>AI</i><span>Готов помочь с рутинными задачами и анализом продаж.</span></div><div className="bar"><span/></div></div>
        </div>
        <div className="float-card"><Bot size={18}/><span><b>AI Assistant</b><small>Умные инструменты</small></span><span className="green-dot"/></div>
      </div>
    </section>
    <section className="ticker"><div className="wrap ticker-inner"><span>SMART AUTOMATION</span><b>✦</b><span>AI LISTING ENHANCER</span><b>✦</b><span>SALES ANALYTICS</span><b>✦</b><span>MARKET RESEARCH</span></div></section>
    <section className="section wrap" id="features">
      <div className="section-head"><div className="eyebrow">ВОЗМОЖНОСТИ ПЛАТФОРМЫ</div><h2>Всё необходимое. <span className="gradient">В одной системе.</span></h2><p>Инструменты для более удобного управления торговлей — в едином интерфейсе.</p></div>
      <div className="feature-grid">{features.map((f,i)=><article className="feature" key={f.title}><div className="feature-icon"><f.icon size={22}/></div><span className="feature-num">0{i+1}</span><h3>{f.title}</h3><p>{f.text}</p></article>)}</div>
    </section>
    <section className="section dark-band" id="how"><div className="wrap split"><div><div className="eyebrow">ПРОСТОЕ НАЧАЛО</div><h2>Твой рабочий процесс. <span className="gradient">Без лишней сложности.</span></h2><p>Подключение площадки, настройка инструментов и контроль действий — в понятной последовательности.</p></div><div className="steps"><div><b>01</b><span><strong>Установи приложение</strong><small>Загрузка станет доступна после публикации сборки.</small></span></div><div><b>02</b><span><strong>Активируй лицензию</strong><small>Получи ключ у продавца и введи его при запуске.</small></span></div><div><b>03</b><span><strong>Подключи FunPay</strong><small>Настрой доступные интеграции и проверь соединение.</small></span></div></div></div></section>
    <section className="section wrap" id="download"><div className="download-card"><div><div className="eyebrow">ДОСТУП К LUFFYRESELLER</div><h2>Готов начать?</h2><p>Свяжись с продавцом, чтобы узнать о лицензии и доступности текущей версии.</p></div><div className="actions"><a className="button primary" href={`https://t.me/${tg}`} target="_blank" rel="noreferrer"><Send size={17}/> Написать @{tg}</a>{download && <a className="button secondary" href={download}><Download size={17}/> Скачать</a>}</div></div></section>
    <section className="section wrap faq" id="faq"><div className="eyebrow">ВОПРОСЫ И ОТВЕТЫ</div><h2>Перед началом</h2><details><summary>Приложение уже можно скачать?</summary><p>Пока нет: установщик Windows ещё не опубликован. Кнопка скачивания появится после выпуска приложения.</p></details><details><summary>Как приобрести ключ?</summary><p>Нажмите «Купить лицензию» и напишите продавцу в Telegram: @{tg}.</p></details><details><summary>Все функции уже доступны?</summary><p>Сайт описывает планируемые возможности платформы. Функции приложения будут доступны после их реализации и проверки.</p></details></section>
    <footer className="footer"><div className="wrap footer-inner"><a className="brand" href="#"><span className="brand-mark">L</span><span>LUFFY<span className="purple">RESELLER</span></span></a><span>© {new Date().getFullYear()} LuffyReseller. Все права защищены.</span><a href={`https://t.me/${tg}`} target="_blank" rel="noreferrer">@{tg}</a></div></footer>
  </main>;
}
