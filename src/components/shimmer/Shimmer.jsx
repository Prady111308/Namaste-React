import Container from "../Container";


const Shimmer = () => {
  const arr = new Array(10).fill("");
  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-1">
        {arr.map((_, index) => {
          return (
            <div key={index} className="w-52 m-4 rounded-md">
              <div className="h-52 w-60 rounded-md bg-gray-300 animate-shimmer"></div>
              <div className="w-5/6 h-5 my-4 rounded-sm bg-gray-300 animate-shimmer"></div>
              <div className="w-1/2 h-3 my-4 rounded-sm bg-gray-300 animate-shimmer"></div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Shimmer;
