export default function Paper() {
    return (
      <div className="flex justify-center items-center px-4 md:px-10">
        <div className="bg-[#fff9df] max-w-4xl w-full p-6 md:p-10 mt-10 mb-10 border-l-4 border-b-4 border-[#3c3836] text-[#3c3836] leading-loose 2xl:max-w-7xl 2xl:min-h-[80.5rem]">
          <div className="text-xl 2xl:text-3xl font-bold">Conditioning</div>
          <div>
            ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ 
            Why did you press the button? Nothing told you to press the button, but you instinctually knew that you needed to 
            press the red button to proceed. Psychology provides an explanation through the term conditioning. 
          </div>
          <div className="w-full p-4 m-2 bg-[#fffce9] border-l-4 border-b-4 border-[#3c3836]">
            💡 Conditioning is the process of training a person to behave in a certain way
          </div>
          <div>
            You, the user, have unintentionally gone through the proper conditioning to recognize that the red box was a button, and that
            pressing the button was essential to proceeding (assuming that you have adequate experience with navigating websites).
            <br />
            <br />
            <div className="text-xl 2xl:text-3xl font-bold">Operant Conditioning</div>
            <div className="w-full p-4 m-2 bg-[#fffce9] border-l-4 border-b-4 border-[#3c3836]">
              💡 The learning that results when an organism connects a behavior with a consequence
            </div>
            <div>
              ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ 
              This type of conditioning was the one this website utilized in order to get the user (you) to press 
              the red button. Operant conditioning is comprised of a few features, such as: Behavior, Consequence, Reinforcement, Shaping,
              and Punishment. I will outline how these features correlate with the button analogy.
              <table className="table-auto w-full border-collapse text-sm md:text-base 2xl:text-2xl 2xl:mt-8">
                <thead>
                  <tr>
                    <th className="border border-[#3c3836] p-2">Feature</th>
                    <th className="border border-[#3c3836] p-2">Definition</th>
                    <th className="border border-[#3c3836] p-2">Button Example</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-[#3c3836] p-2">Behavior</td>
                    <td className="border border-[#3c3836] p-2">The learned action performed</td>
                    <td className="border border-[#3c3836] p-2">Pressing the red button</td>
                  </tr>
                  <tr>
                    <td className="border border-[#3c3836] p-2">Consequence</td>
                    <td className="border border-[#3c3836] p-2">The outcome of the behavior</td>
                    <td className="border border-[#3c3836] p-2">Advancing to the next page</td>
                  </tr>
                  <tr>
                    <td className="border border-[#3c3836] p-2">Reinforcement</td>
                    <td className="border border-[#3c3836] p-2">Process that increases the likelihood of a behavior</td>
                    <td className="border border-[#3c3836] p-2">Successful navigation to next page</td>
                  </tr>
                  <tr>
                    <td className="border border-[#3c3836] p-2">Shaping</td>
                    <td className="border border-[#3c3836] p-2">Gradual modification of behavior through successive approximations</td>
                    <td className="border border-[#3c3836] p-2">Learning web interaction patterns over time</td>
                  </tr>
                  <tr>
                    <td className="border border-[#3c3836] p-2">Punishment</td>
                    <td className="border border-[#3c3836] p-2">Consequence that decreases the likelihood of a behavior</td>
                    <td className="border border-[#3c3836] p-2">Potential error or unexpected outcome if button not pressed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
  