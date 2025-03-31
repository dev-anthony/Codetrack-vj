export default function Features() {
  const features = [
    {
      title: "Daily Theme",
      icon: "🎨", 
      content: [
        "To add an extra layer of creativity and structure, each day of the challenge will feature a thematic prompt or focus. This can range from specific coding techniques to broader project themes.",
        "Participants are encouraged to incorporate these themes into their daily projects, adding an element of diversity to the overall challenge."
      ]
    },
    {
      title: "Documentation Submission",
      icon: "⚡", 
      content: [
        "In addition to the daily project submissions, participants are required to submit a concise documentation file accompanying each project.",
        "This documentation should provide insights into the project’s purpose, key features, and any notable challenges or learning experiences encountered during development."
      ]
    },
    {
      title: "Conclusion",
      icon: "📧", 
      content: [
        'The "30 Days of Code with VickyJay" challenge is an exciting opportunity for programmers to enhance their skills, build a portfolio of diverse projects, and connect with a vibrant coding community. This documentation outlines the essential aspects of the challenge, ensuring a smooth and enriching experience for both participants and admins.'
      ]
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#fcg9g9] to-[#a31621] p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full max-w-6xl">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#fcf7f8] px-8 p-10 border-2 border-[#a31621] hover:bg-[] hover:bg-opacity-75 transition-all duration-300  max-w-[390.504px] md:max-w-[652px] lg:h-[359px] flex flex-col items-start rounded-md"
          >
            <h4 className="text-[18px] mb-4 pb-2 capitalize leading-[22.16px] font-medium  font-cabinet md:text-[25px] md:leading-[37px] flex items-center">
              <span className="mr-2">{feature.icon}</span>
              {feature.title}
            </h4>
            {feature.content.map((paragraph, idx) => (
              <p key={idx} className="text-[#a31621] text-[12px] leading-[20.963px] font-medium font-cabinet md:text-[18px] md:leading-[35px] max-w-[353.369px] lg:max-w-[590px]">
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}