import React, {useState} from 'react';

const FormStep1 = ({setActiveStep1, setActiveStep2, setThings}) => {
    const [clothes, setClothes] = useState(false);
    const [clothesBadCondition, setClothesBadCondition] = useState(false);
    const [toys, setToys] = useState(false);
    const [books, setBooks] = useState(false);
    const [other, setOther] = useState(false);

    console.log(toys, clothes, books)

    const handleClothes = () => {
        setClothes(true);
        setClothesBadCondition(false);
        setToys(false);
        setBooks(false);
        setOther(false);
    }
    const handleClothesBadCondition = () => {
        setClothes(false);
        setClothesBadCondition(true);
        setToys(false);
        setBooks(false);
        setOther(false);
    }
    const handleToys = () => {
        setClothes(false);
        setClothesBadCondition(false);
        setToys(true);
        setBooks(false);
        setOther(false);
    }
    const handleBooks = () => {
        setClothes(false);
        setClothesBadCondition(false);
        setToys(false);
        setBooks(true);
        setOther(false);
    }
    const handleOther = () => {
        setClothes(false);
        setClothesBadCondition(false);
        setToys(false);
        setBooks(false);
        setOther(true);
    }

    const things = () => {
        if(clothes) {
            setThings("ubrania, które nadają się do ponownego użycia")
        }
        if(clothesBadCondition){
            setThings("ubrania, do wyrzucenia")
        }
        if(toys){
            setThings("zabawki")
        }
        if(books){
            setThings("książki")
        }
        if(other){
            setThings("inne")
        }
    }

    const handleStep2 = (e) => {
        e.preventDefault();
        setActiveStep1(false);
        setActiveStep2(true);
        things();
    }

    return (
        <>
            <div className="form__info">
                <h3 className="form__important">Ważne!</h3>
                <p className="form__description">Uzupełnij szczegóły dotyczące Twoich rzeczy.
                    Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
            </div>
            <div className="form__background">
                <form className="form__form">
                    <p className="form__step">Krok 1/4</p>
                    <h3 className="form__subtitle">Zaznacz co chcesz oddać:</h3>
                        <div className="form__holder">
                            <div className="form__option">
                                <input type="radio" id="clothes" className={clothes === true ? "form__radio--input--checked" : "form__radio--input"} value="clothes" onClick={handleClothes}/>
                                <label htmlFor="clothes" className="form__radio--label">ubrania, które nadają się do ponownego użycia</label>
                            </div>
                            <div className="form__option">
                                <input type="radio" id="clothesBadCondition" className={clothesBadCondition === true ? "form__radio--input--checked" : "form__radio--input"} value="clothesBadCondition" onClick={handleClothesBadCondition}/>
                                <label htmlFor="clothesBadCondition" className="form__radio--label">ubrania, do wyrzucenia</label>
                            </div>
                            <div className="form__option">
                                <input type="radio" id="toys" className={toys === true ? "form__radio--input--checked" : "form__radio--input"} value="toys" onClick={handleToys}/>
                                <label htmlFor="toys" className="form__radio--label">zabawki</label>
                            </div>
                            <div className="form__option">
                                <input type="radio" id="books" className={books === true ? "form__radio--input--checked" : "form__radio--input"} value="books" onClick={handleBooks} />
                                <label htmlFor="books" className="form__radio--label">książki</label>
                            </div>
                            <div className="form__option">
                                <input type="radio" id="other" className={other === true ? "form__radio--input--checked" : "form__radio--input"} value="others" onClick={handleOther}/>
                                <label htmlFor="other" className="form__radio--label">inne</label>
                            </div>
                        </div>
                    <button className="form__button" onClick={handleStep2}>Dalej</button>
                </form>
            </div>
        </>
    );
};

export default FormStep1;