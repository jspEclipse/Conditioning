export default function Paper2() {
    return (
        <div className="flex justify-center items-center px-4 md:px-10">
            <div className="bg-[#fff9df] max-w-4xl w-full p-6 md:p-10 mt-10 mb-10 border-l-4 border-b-4 border-[#3c3836] text-[#3c3836] leading-loose 2xl:max-w-7xl 2xl:min-h-[80.5rem]">
                <div className="text-xl 2xl:text-3xl font-bold">Classical Conditioning</div>
                <div className="w-full p-4 m-2 bg-[#fffce9] border-l-4 border-b-4 border-[#3c3836]">
                    💡 Classical Conditioning is when a neutral stimulus elicits a response after being paired 
                    with a stimulus that elicits that response
                </div>
                <div>
                    If I had to guess you, the user, most likely noticed the rectangles on the side which change position by scrolling,
                    and decided to fiddle around with the scroll a little bit for fun. I placed these rectangles as an example of 
                    classical conditioning.
                </div>
                <table className="table-auto w-full border-collapse text-sm md:text-base 2xl:text-2xl 2xl:m-8">
                    <thead>
                        <tr>
                            <th className="border border-[#3c3836] p-2">Feature</th>
                            <th className="border border-[#3c3836] p-2">Definition</th>
                            <th className="border border-[#3c3836] p-2">Button Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-[#3c3836] p-2">Neutral Stimulus</td>
                            <td className="border border-[#3c3836] p-2">Stimulus that triggers no response</td>
                            <td className="border border-[#3c3836] p-2">Scrolling</td>
                        </tr>
                        <tr>
                            <td className="border border-[#3c3836] p-2">Unconditioned Stimulus</td>
                            <td className="border border-[#3c3836] p-2">Stimulus that triggers a response without any conditions</td>
                            <td className="border border-[#3c3836] p-2">red, green, and blue rectangles moving in a satisfying way when scrolling</td>
                        </tr>
                        <tr>
                            <td className="border border-[#3c3836] p-2">Unconditioned Response</td>
                            <td className="border border-[#3c3836] p-2">The response to the Unconditioned Stimulus</td>
                            <td className="border border-[#3c3836] p-2">Satisfying feeling when rectangles move</td>
                        </tr>
                        <tr>
                            <td className="border border-[#3c3836] p-2">Conditioned Response</td>
                            <td className="border border-[#3c3836] p-2">The learned response to the conditioned stimulus</td>
                            <td className="border border-[#3c3836] p-2">Scrolling more</td>
                        </tr>
                    </tbody>
                </table>
                <div className="text-xl 2xl:text-3xl font-bold">Classical Conditioning: Being Aware of Applications in the Web</div>
                <div>
                    ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ 
                    Companies nowadays are utilizing classical conditioning in order to advertise and keep retention on their apps.
                    A prime example can be seen by looking at TikTok - a social media company that focuses on short-form content, and reads user interaction in order 
                    to gauge what they should recommend in order to keep the user on for longer. This forces a neutral stimulus (scrolling) to
                    be paired up with entertainment, keeping the user&apos;s attention on the app.
                    <br />
                    ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ 
                    Another example is Fortnite, a game that recently started collaborating with big name franchises such as Marvel, Star Wars,
                    and Anime which invoke excitement in fans without prior conditioning. By featuring these characters, fans of these franchises
                    will likely start to associate these same feelings towards the game.
                    <br />
                    ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ 
                    Phishing scammers may also use classical conditioning by pairing their fraudulent emails with trusted brands in order
                    to gain the user&apos;s trust and increase the likelihood of a user getting scammed.
                </div>
            </div>
        </div>
    );
}
