import React, { useState } from 'react';
import './form-calculator.css';

const FormCalculator = () => {
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [genderValue, setGenderValue] = useState("Мужской");
    const [active, setActive] = useState("1.2");
    const [formulaValue, setFormulaValue] = useState('Харриса-Бенедикта');
    const [showResultCalories, setShowResultCalories] = useState('');

    const [errorAge, setErrorAge] = useState('');
    const [errorWeight, setErrorWeight] = useState('');
    const [errorHeight, setErrorHeight] = useState('');



    //   Функции установки и получения значений из инпутов :
    const getAge = (e) => {
        setAge(e.target.value)
    }

    const getWeight = (e) => {
        setWeight(e.target.value)
    }

    const getHeight = (e) => {
        setHeight(e.target.value)
    }

    const changeValue = (e) => {
        setGenderValue(e.target.value);
    }

    const getActive = (e) => {
        setActive(e.target.value);
    }

    const changeFormulaValue = (e) => {
        setFormulaValue(e.target.value);
    }

    // Проверка инпутов на валидность: 
const validateInput = (height, weight, age) => {
    const elementHeight = document.querySelector('.height'),
        elementWeight = document.querySelector('.weight'),
        elementAge = document.querySelector('.age');

    if (!height || height > 250 || height < 0) {
        elementHeight.style.border = '2px solid red';
        setErrorHeight('Значение пусто или превышает макс. значение!');
    } else {
        elementHeight.style.border = '';
        setErrorHeight('');
    }
    if (!weight || weight > 236 || weight < 0) {
        elementWeight.style.border = '2px solid red';
        setErrorWeight('Значение пусто или превышает макс. значение!');
    } else {
        elementWeight.style.border = '';
        setErrorWeight('');
    }
    if (!age || age > 100 || age < 0) {
        elementAge.style.border = '2px solid red';
        setErrorAge('Значение пусто или превышает макс. значение!');
    } else {
        elementAge.style.border = '';
        setErrorAge('');
    }
}

    // Основная формула рассчетов калорий : 
    const mainCalc = () => {
        if (height && weight && age) {
            validateInput(height, weight, age);
            let BMR = 0;
            if (formulaValue === "Харриса-Бенедикта") {
                if (genderValue === "Мужской") {
                    BMR = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
                    let localResult = Math.round(+active * BMR);
                    let result = "Ваша суточная норма калорий по формуле Харриса-Бенедикта: " + localResult + ".";
                    setShowResultCalories(result);
                } else {
                    BMR = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
                    let localResult = Math.round(+active * BMR);
                    let result = "Ваша суточная норма калорий по формуле Харриса-Бенедикта: " + localResult + ".";
                    setShowResultCalories(result);
                }
            } else {
                // формула Сан-Жеора
                if (genderValue === "Мужской") {
                    BMR = (9.99 * weight) + (6.25 * height) - (4.92 * age) + 5;
                    let localResult = Math.round(+active * BMR);
                    let result = "Ваша суточная норма калорий по формуле Миффлина-Сан-Жеора: " + localResult + ".";
                    setShowResultCalories(result);
                }
                else {
                    BMR = (9.99 * weight) + (6.25 * height) - (4.92 * age) - 161;
                    let localResult = Math.round(+active * BMR);
                    let result = "Ваша суточная норма калорий по формуле Миффлина-Сан-Жеора: " + localResult + ".";
                    setShowResultCalories(result);

                }
            }
        } else {
            validateInput(height, weight, age);
            
        }

    }

    return (
        <div className='formCalculator'>
            <h2 className='formCalculator__title'>Онлайн калькулятор калорий</h2>
            <span>Возраст: </span>
            <input
                onChange={getAge}
                value={age}
                type='number'
                placeholder='лет'
                className='age'
            /> 
                <i className='error'>{errorAge}</i>
            <br />
            <span>Пол: </span>

            <label>
                <input
                    value="Мужской"
                    onChange={changeValue}
                    checked={genderValue === "Мужской" ? true : false}
                    type='radio'
                    name='gender'
                    className='male'
                />
            Мужской </label>
            <label>
                <input
                    value="Женский"
                    onChange={changeValue}
                    checked={genderValue === "Женский" ? true : false}
                    type='radio'
                    name='gender'
                    className='female '
                />
            Женский</label>
            <br />
            <span>Вес: </span>
            <input
                onChange={getWeight}
                value={weight}
                type='number'
                placeholder='кг'
                className='weight'
            />
                <i className='error'>{errorWeight}</i>
            <br />
            <span>Рост: </span>
            <input
                type='number'
                onChange={getHeight}
                value={height}
                placeholder='см'
                className='height'
            />
                <i className='error'>{errorHeight}</i>
            <br />
            <span>Физ. активность: </span>
            <select onChange={getActive} className="active">
                <option value='1.2'>Сидячий (мало активности):</option>
                <option value="1.375">Слабая активность (занятия спортом 1-3 день в неделю)</option>
                <option value="1.55">Умеренно активный (занятия спортом 3-5 дней в неделю)</option>
                <option value="1.725">Очень активный (спорт 6-7 дней в неделю)</option>
                <option value="1.9">Если вы очень активны (спорт и физическая работа)</option>
            </select>
            <br />
            <span>Формула Расчета: </span>
            Харриса-Бенедикта
            <input
                type='radio'
                onChange={changeFormulaValue}
                value='Харриса-Бенедикта'
                checked={formulaValue === "Харриса-Бенедикта" ? true : false}
                name='formula'
                className='formula-Haris'
            />&nbsp;
            Миффлина-Сан Жеора
            <input
                type='radio'
                onChange={changeFormulaValue}
                value='Сан Жеора'
                checked={formulaValue === "Сан Жеора" ? true : false}
                name='formula'
                className='formula-San-Zheor'
            />
            <br />
            <button onClick={mainCalc} className='btn-calculator'>Посчитать</button>
            <br />
            <div className='show-result'>{showResultCalories}</div>

        </div>
    )
}

// Формула Харриса-Бенедикта.
// 655,1 + (9.6 х массу тела в кг) + (1.85 х рост) - (возраст х 4.68)
// Мужчины: BMR = 88.362 + (13.397 x вес в кг) + (4.799 x рост в см) - (5.677 x возраст)
// Женщины: BMR = 447.593 + (9.247 x вес в кг) + (3.098 x рост в см) - (4.330 x возраст)
// Норма = AMR * BMR
// AMR - это уровень активности

// Формула Миффлина Сан-Жеора.
// Для мужчин: BMR = 9.99 x вес (кг) + 6.25 x рост (см) - 4.92 x возраст (лет) + 5
// Для женщин: BMR = 9.99 x вес (кг) + 6.25 x рост (см) - 4.92 x возраст (лет) – 161
// Норма = AMR * BMR
// AMR - это уровень активности



export default FormCalculator;