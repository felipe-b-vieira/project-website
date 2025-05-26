'use client'
import React from "react";
import ImageButton from "./components/ImageButton";
import CharacterActions from "../artifact-mmo/page";
import { useRouter } from "next/navigation";

const applications = [
    {
        url: '/images/artifact-mmo/artifact-mmo-banner.png',
        title: 'Artifact MMO',
        width: '285px',
        height: '185px',
        component: CharacterActions
    }
];

const ApplicationsList: React.FC = () => {
    const router = useRouter()

    return (
        <div>
            {applications.map((application, index) => (
                <ImageButton
                    key={index}
                    url={application.url}
                    title={application.title}
                    width={application.width}
                    height={application.height}
                    onClick={() => {
                        router.push('/artifact-mmo');
                    }}
                />
            ))}
        </div>
    );
};

export default ApplicationsList;