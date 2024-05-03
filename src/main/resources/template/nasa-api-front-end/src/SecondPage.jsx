import useStore from './store';

const SecondPage = () => {
  const apodData = useStore(state => state.apodData);
  console.log(apodData)

 

 
  return (
    <div>
      <h1>Second Page</h1>
        {apodData && apodData.length > 0 ? (<div className="container">
            <div className="row">
                {apodData.map((apod) => (
                <div className="col-sm-4 mb-3" key={apod.date}>
                    <div className="card">
                    <img src={apod.url} alt={apod.title} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{apod.title}</h5>
                        <p className="card-text">{apod.explanation}</p>
                        <p className="card-text"><small className="text-muted">{apod.date}</small></p>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            </div>):(
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h3>No data found</h3>
                    </div>
                </div>
                </div>
            )}
    </div>
  );
};

export default SecondPage;
