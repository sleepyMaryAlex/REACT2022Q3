import React from 'react';
import './AboutPage.css';
import foodImg from '../../assets/images/diet.png';
import ontologyImg from '../../assets/icons/ontology.svg';
import spoonacularImg from '../../assets/icons/spoonacular.svg';

class AboutPage extends React.Component<object> {
  options: string[];
  constructor(props: object) {
    super(props);
    this.options = [
      `find recipes to use ingredients you already have ("what's in your fridge"; search)`,
      `find recipes based on nutritional requirements`,
      `extract recipes from any website`,
      `classify a recipe's type or cuisine`,
      `generate an entire meal plan`,
      `generate shopping lists`,
      `UPC lookup of American grocery products`,
      `detect food in text (NER)`,
      `food trivia and jokes`,
      `create a chatbot`,
    ];
  }

  render() {
    return (
      <div className="about-page">
        <div className="about">
          <div className="about__container">
            <div className="about__content">
              <h2>The only food you&apos;ll ever need.</h2>
              <p>
                Our knowledge engineers spent years crafting our complex food ontology, which allows
                us to understand the relationships between ingredients, recipes, nutrition,
                allergens, and more. We understand &quot;nut free&quot; muffins can&apos;t contain
                pecans (even if the recipe doesn&apos;t mention &quot;nuts&quot; anywhere!) and we
                automatically determine that a recipe with Worcestershire sauce isn&apos;t
                vegetarian (we&apos;re looking at you, anchovies.)
              </p>
            </div>
            <img src={ontologyImg} alt="ontology" />
          </div>
        </div>
        <div className="diet">
          <div className="diet__card">
            <h3>Gluten Free</h3>
            <p>
              Eliminating gluten means avoiding wheat, barley, rye, and other gluten-containing
              grains and foods made from them (or that may have been cross contaminated).
            </p>
          </div>
          <div className="diet__card">
            <h3>Ketogenic</h3>
            <p>
              The keto diet is based more on the ratio of fat, protein, and carbs in the diet rather
              than specific ingredients. Generally speaking, high fat, protein-rich foods are
              acceptable and high carbohydrate foods are not. The formula we use is 55-80% fat
              content, 15-35% protein content, and under 10% of carbohydrates.
            </p>
          </div>
          <div className="diet__card">
            <h3>Vegetarian</h3>
            <p>No ingredients may contain meat or meat by-products, such as bones or gelatin.</p>
          </div>
          <div className="diet__card">
            <h3>Primal</h3>
            <p>
              Very similar to Paleo, except dairy is allowed - think raw and full fat milk, butter,
              ghee, etc.
            </p>
          </div>
          <div className="diet__card">
            <h3>Vegan</h3>
            <p>
              No ingredients may contain meat or meat by-products, such as bones or gelatin, nor may
              they contain eggs, dairy, or honey.
            </p>
          </div>
          <div className="diet__card">
            <h3>Paleo</h3>
            <p>
              Allowed ingredients include meat (especially grass fed), fish, eggs, vegetables, some
              oils (e.g. coconut and olive oil), and in smaller quantities, fruit, nuts, and sweet
              potatoes. We also allow honey and maple syrup (popular in Paleo desserts, but strict
              Paleo followers may disagree)...
            </p>
          </div>
          <div className="diet__card">
            <h3>Low FODMAP</h3>
            <p>
              FODMAP stands for &quot;fermentable oligo-, di-, mono-saccharides and polyols&quot;.
              Our ontology knows which foods are considered high in these types of carbohydrates
              (e.g. legumes, wheat, and dairy products)
            </p>
          </div>
          <div className="diet__card">
            <h3>Whole30</h3>
            <p>
              Allowed ingredients include meat, fish/seafood, eggs, vegetables, fresh fruit, coconut
              oil, olive oil, small amounts of dried fruit and nuts/seeds. Ingredients not allowed
              include added sweeteners (natural and artificial, except small amounts of fruit
              juice), dairy (except clarified butter or ghee), alcohol, grains, legumes...
            </p>
          </div>
        </div>
        <div className="opportunities">
          <div className="opportunities__container">
            <div className="opportunities__content">
              <h2>Something else in mind?</h2>
              <p>
                We are more than just a recipe. We provide solutions to make any food-related vision
                a reality.
              </p>
              <ul>
                {this.options.map((option) => (
                  <li key={option}>✓ {option}</li>
                ))}
              </ul>
            </div>
            <img src={foodImg} alt="food" />
          </div>
        </div>
        <div className="contacts">
          <div className="contacts__content">
            <h2>Don&apos;t be shy.</h2>
            <p>
              We&apos;d love to hear from you. Send us an email to get answers to any questions you
              have or to set up a quick call. You can also chat with the community in our Discord
              Chat.
            </p>
          </div>
          <img src={spoonacularImg} alt="icon" />
        </div>
      </div>
    );
  }
}

export default AboutPage;
