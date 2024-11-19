import React, { useState } from 'react';

const Home = ({ plans, onSelectPlan }) => {
    const [selectedPlan, setSelectedPlan] = useState(null); 
    const handleSelectPlan = (planName) => { 
        setSelectedPlan(planName); 
        onSelectPlan(planName); // Assurez-vous d'appeler la fonction de rappel
    };

    return (
        <div className="p-4 bg-gray-900 text-center">
            <h1 className="text-5xl font-bold mb-4 text-white">Bienvenue sur Netflop</h1>
            <p className="mb-6 text-3xl text-green-500">
                Découvrez NetFlop, votre destination ultime pour rechercher des films et des séries. 
                Explorez des critiques, des recommandations et trouvez votre prochain coup de cœur !
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {plans.map((plan, index) => (
                    <div key={index} className="border rounded-lg p-4 shadow-md">
                        <h2 className="text-white text-xl font-semibold">{plan.name}</h2>
                        <p className="text-yellow-500 text-lg font-bold">{plan.price}</p>
                        <ul className="mb-4">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="text-sm text-orange-400">{feature}</li>
                            ))}
                        </ul>
                        <button
                            onClick={() => handleSelectPlan(plan.name)}
                            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                        >
                            S'abonner
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;