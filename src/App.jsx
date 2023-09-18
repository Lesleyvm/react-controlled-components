import React from 'react';
import './App.css';
function App() {
    // initialiseer één state variabele met daarin een object aan form-waardes
    // let op: de namen van de keys moeten overeenkomen met de name-attributen van de velden

    const [formState, setFormState] = React.useState({
        name: "",
        age: 0,
        comments: "",
        newsletter: false
    });
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    // handleFormChange wordt afgevuurd bij elke verandering en zorgt dan dat het huidige state object wordt gekopieerd
    // alleen de object key van het bijbehorende inputveld wordt overschreven met een nieuwe waarde
    function handleFormChange(e) {
        const changedFieldName = e.target.name;
        const newValue = e.target.type === "checkbox" ? e.target.checked : e.target.value;

        setFormState({
            ...formState,
            [changedFieldName]: newValue,

        });
        console.log(`The value of input ${e.target.name} has just been set to ${e.target.value}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Gegevens</legend>
                <label htmlFor="full-name-field">Naam:</label>
                <input type="text"
                       id="full-name-field"
                       name="name-field"
                       value={formState.name}
                       onChange={handleFormChange}
                />
                <label htmlFor="age-field">Leeftijd:</label>
                <input type="text"
                       id="age-field"
                       name="age-field"
                       value={formState.age}
                       onChange={handleFormChange}
                />
            </fieldset>
            <fieldset>
                <legend>Jouw review</legend>
                <label htmlFor="feedback-field">Opmerkingen:</label>
                <textarea name="feedback"
                          id="feedback-field"
                          cols="30"
                          rows="10"
                          placeholder="Wat vond je van het recept?"
                          value={formState.comments}
                          onChange={handleFormChange}
                >
                    </textarea>

                <label htmlFor="newsletter">
                    <input type="checkbox"
                           id="newsletter"
                           name="newsletter"
                           className="checkbox"
                           checked={formState.newsletter}
                           onChange={handleFormChange}
                    />
                    Ik schrijf me in voor de nieuwsbrief
                </label>
                <button type="submit">Versturen</button>
            </fieldset>
        </form>
    );
}

export default App;
