import React from 'react';

export default function () {
    const socialMediaData = [
        {
            name: "Facebook",
            app: "Facebook App",
            logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
            description: "Facebook is a social networking platform where users can post comments, share photos, and stay connected with friends."
        },
        {
            name: "Instagram",
            app: "Instagram App",
            logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
            description: "Instagram is a photo and video-sharing social networking service where users can share moments with their followers."
        },
        {
            name: "Twitter",
            app: "Twitter App",
            logo: "https://upload.wikimedia.org/wikipedia/en/6/60/Twitter_Logo_as_of_2021.svg",
            description: "Twitter is a microblogging and social networking platform where users can post and interact with messages known as 'tweets'."
        },
        {
            name: "LinkedIn",
            app: "LinkedIn App",
            logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
            description: "LinkedIn is a business and employment-oriented platform used for professional networking and career development."
        },
        {
            name: "TikTok",
            app: "TikTok App",
            logo: "https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg",
            description: "TikTok is a short-form video hosting service where users can share creative videos ranging from challenges to tutorials."
        }
    ];

    return (
        <div>
            <h1>Social Media Platforms</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {socialMediaData.map((platform, index) => (
                    <div key={index} style={{ border: '1px solid #ccc', padding: '20px', width: '200px', textAlign: 'center' }}>
                        <img src={platform.logo} alt={platform.name} style={{ width: '50px', height: '50px' }} />
                        <h2>{platform.name}</h2>
                        <p><strong>App:</strong> {platform.app}</p>
                        <p>{platform.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
