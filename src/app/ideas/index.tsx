import React from "react";

export const ideas = ["SpaceTraderAPI", "Make a API Game", "Make a Godot Game", "Adventure.land"];

const IdeaList: React.FC = () => {

    return (
        <div>
            {ideas.map((idea, index) => (
                <label key={index+' - label'}>
                    {idea} <br key={index+' - br'}/>
                </label>
            ))}
        </div>
    );
};

export default IdeaList;