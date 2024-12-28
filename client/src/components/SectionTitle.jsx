const SectionTitle = ({ subHeading, heading }) => {
  return (
    <div className="my-8 text-center w-5/12 mx-auto mb-12">
      <h3 className="text-yellow-500 text-xl mb-2">--- {subHeading} ---</h3>
      <h3 className="text-4xl border-y-4 py-4">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
