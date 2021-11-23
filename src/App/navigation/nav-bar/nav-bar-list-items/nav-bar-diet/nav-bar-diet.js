import React from 'react';
import AppFooter from '../../../../app-footer/app-footer';
import ArrowUp from '../../../../UI/arrow-up/arrow-up';

import './nav-bar-diet.css';
import imgDietTitle from './image-diet/imgDietTitle.jpg' 
import imgDiet1 from './image-diet/imgDiet1.jpg'
import imgDiet2 from './image-diet/imgDiet2.jpg'
import imgDiet3 from './image-diet/imgDiet3.jpg'
import imgDiet4 from './image-diet/imgDiet4.jpg'
import imgDiet5 from './image-diet/imgDiet5.jpg'
import imgDiet6 from './image-diet/imgDiet6.png'
import imgDiet7 from './image-diet/imgDiet7.jpg'
import imgDiet8 from './image-diet/imgDiet8.jpeg'
import imgDiet9 from './image-diet/imgDiet9.jpg'
import imgDiet10 from './image-diet/imgDiet10.jpg'



const NavBarDiet = ({checkedTop}) => {

    return (
        <div className="navBarDiet">
            <h3 className ='titleDiet'>10 наиболее эффективных диет для быстрого похудения</h3>
            <img src={imgDietTitle} alt='fitness' className='imgDietTitle'/>
            <p className='diet-description'>
                Лучшие диеты для быстрого похудения. Диет для похудения существует множество, 
                но далеко не все из них помогают не только быстро сбросить вес, но и сделать это без вреда для организма.
                Диетологи выделяют 10 эффективных диет для быстрого похудения, имеющие разные принципы:
            </p>
            <div className="diet-block">
                <h3 className='diet-title'>Диета на 10 дней</h3>
                <img src={imgDiet1} alt='diet1' className='img-diet'/>
                <p className='diet-description'>
                    Меню отличается разнообразием по сравнению с другими видами диетического питания. 
                    Тем не менее диета строгая, поэтому переносится тяжело, особенно если соблюдается в первый раз.
                </p>
                <p className='diet-description'>
                    Каждый день необходимо употреблять только один продукт в предписанном количестве.
                    Меню на 10 дней выглядит следующим образом:
                </p>
                <ul className='diet-list'>
                    <li>Первый — 4 отварных яйца.</li>
                    <li>Второй — 400 г вареной рыбы.</li>
                    <li>Третий — 400 г куриной грудки.</li>
                    <li>Четвертый — 5 клубней картофеля (отварных)</li>
                    <li>Пятый — 400 г телятины.</li>
                    <li>Шестой — фрукты в любом количестве.</li>
                    <li>Седьмой — 400 г овощей.</li>
                    <li>Восьмой — 500 г творога.</li>
                    <li>Девятый — 1 л кефира.</li>
                    <li>Десятый — 2 л отвара шиповника.</li>
                </ul>
                <p className='diet-description'>
                    Какие-либо специи запрещены. Обязательно в день выпивать не менее 2 л воды.
                    Для заправки овощных салатов может использоваться только сок лимона.
                    Если не отклоняться от меню, за 10 суток можно похудеть на 10 кг.
                </p>
            </div>
            <div className="diet-block">
                <h3 className='diet-title'>Диета на луковом супе</h3>
                <img src={imgDiet2} alt='diet2' className='img-diet'/>
                <p className='diet-description'>
                    Этот метод похудения рассчитан на неделю. Для приготовления 3 л супа потребуются следующие ингредиенты:
                </p>
                <ul className='diet-list'>
                    <li>лук — 6 шт.;</li>
                    <li>капуста — 1 небольшая;</li>
                    <li>помидоры — 2 шт.;</li>
                    <li>болгарский перец — 2 шт.;</li>
                    <li>сельдерей — 1 пучок</li>
                </ul>
                <p className='diet-description'>
                    Соль и другие специи добавлять нельзя. Это действенный метод похудения, помогающий за неделю избавиться от 10 кг.
                    Кроме супа, разрешено употребление сырых овощей и фруктов.
                </p>
            </div>
            <div className="diet-block">
                <h3 className='diet-title'>Японская диета</h3>
                <img src={imgDiet3} alt='diet3' className='img-diet'/>
                <p className='diet-description'>Рассчитана на 2 недели. Список разрешенных продуктов:</p>
                <ul className='diet-list'>
                    <li>морепродукты;</li>
                    <li>яйца;</li>
                    <li>постная рыба и мясо;</li>
                    <li>овощи и фрукты;</li>
                    <li>творог.</li>
                </ul>
                <p className='diet-description'>Примерный рацион на 1 день:</p>
                <ul className='diet-list'>
                    <li>завтрак: чашка кофе без сахара;</li>
                    <li>обед — тушеная капуста, 2 отварных яйца, стакан сока из томатов;</li>
                    <li>ужин — небольшой кусок отварной рыбы или постного мяса.</li>
                </ul>
                <p className='diet-description'>
                    Между основными приемами пищи разрешены перекусы в виде овощей, фруктов, соков.
                    Помимо похудения на 10 кг и более, такой рацион питания поможет очистить кишечник.
                </p>
            </div>
            <div className="diet-block">
                <h3 className='diet-title'>Английская диета:</h3>
                <img src={imgDiet4} alt='diet4' className='img-diet'/>
                <p className='diet-description'>Рассчитана на 3 недели, основа меню — свежие овощи и фрукты.</p>
                <p className='diet-description'>
                    Такие рационы называют летними диетами. Они помогают похудеть и насытить организм витаминами.
                    Результат — похудение на 15 кг. Первые 2 дня можно употреблять только молоко, до 2 л и 2 куска хлеба.
                    Оставшиеся 19 дней имеют следующее меню:
                </p>
                <ul className='diet-list'>
                    <li>утро — 2 яблока;</li>
                    <li>обед — суп из овощей;</li>
                    <li>полдник — любые фрукты;</li>
                    <li>ужин — нарезка из овощей.</li>
                </ul>
                <p className='diet-description'>Такой рацион имеет противопоказания — наличие заболеваний органов ЖКТ.</p>
            </div>
            <div className="diet-block">
                <h3 className='diet-title'>Очищающая диета</h3>
                <img src={imgDiet5} alt='diet5' className='img-diet'/>
                <p className='diet-description'>
                    Избавляет от лишних килограммов и очищает организм. Правила диеты — отказ от жирной, острой пищи и специй.
                    Рекомендуется выпивать не менее 2 л воды, принимать пищу 4 раза в день. За 10 дней очищающей диеты можно сбросить около 10 кг.
                </p>
            </div>
            <div className="diet-block">
                <h3 className='diet-title'>Диета для ленивых</h3>
                <img src={imgDiet6} alt='diet6' className='img-diet'/>
                <p className='diet-description'>
                    Полностью оправдывает свое название.
                    Да, похудеть совсем без диеты нельзя, но этот рацион не требует приготовления отдельных блюд. 
                    Эта система питания помогает избавиться от 10 кг без возврата веса в будущем.
                </p>
                <p className='diet-description'>
                    Основное правило — употребление 2 стаканов воды перед каждым приемом пищи, питание 3 раза в день.
                    Разрешены перекус, но перед каждым из них выпивается стакан воды. 
                    После еды пить воду и другие жидкости можно, но только выдержав промежуток в 2 часа. 
                    Из рациона нужно убрать жирные блюда, соусы, избыток соли, хлебобулочные изделия.
                </p>
            </div>
            <div className="diet-block">
                <h3 className='diet-title'>Вегетарианская диета</h3>
                <img src={imgDiet7} alt='diet7' className='img-diet'/>
                <p className='diet-description'>
                    Подразумевает употребление пищи только растительного происхождения: овощи, фрукты, каши. 
                    Длительность варьируется от 7 дней до 2 недель, за которые можно похудеть на 10 кг. 
                    В особенности хороша эта диета для ног, т. к. быстро уменьшаются их объемы.
                </p>
            </div>
            <div className="diet-block">
                <h3 className='diet-title'>Водная диета</h3>
                <img src={imgDiet8} alt='diet8' className='img-diet'/>
                <p className='diet-description'>
                    Подразумевает дробное питание, отказ от жирной и жареной пищи, хлебобулочных изделий. 
                    Основной принцип — употребление воды по графику — через полчаса после утреннего пробуждения, 
                    за 30 минут до пищи и через полчаса после нее.
                </p>
                <p className='diet-description'>Запивать еду нельзя. За 10 дней можно похудеть на 7 кг и более, если заниматься спортом.</p>
            </div>
            <div className="diet-block">
                <h3 className='diet-title'>Капустная диета</h3>
                <img src={imgDiet9} alt='diet9' className='img-diet'/>
                <p className='diet-description'>
                    Помогает за 10 дней сбросить 10 кг. Основа ежедневного меню — любые разновидности капусты, которые употребляются в сыром, 
                    отварном виде или на пару. Помимо капусты, разрешено постное мясо и рыба, крупы, овощи и фрукты.
                </p>
            </div>
            <div className="diet-block">
                <h3 className='diet-title'>Картофельная диета</h3>
                <img src={imgDiet10} alt='diet10' className='img-diet'/>
                <p className='diet-description'>
                    Считается самой необычной. Проводить диету лучше летом, чтобы в меню присутствовал молодой картофель. 
                    Клубни запекаются или отвариваются, но употребляются без соли и других специй.
                </p>
                <p className='diet-description'>
                    Какую диету выбрать девушкам, зависит от их личных и вкусовых предпочтений. 
                    Главное — диетический рацион не должен вызывать постоянного голода.
                </p>
            </div>
            {checkedTop ? <ArrowUp/> : null}
            <AppFooter/>
        </div>
    )
}

export default NavBarDiet;