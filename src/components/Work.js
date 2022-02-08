const Work = () => {
    return (
        <div className="work">
            <div className="container-fluid mt-5 pb-5 bg-light">
                <h2 className="text-center pt-5 mb-5 head-title text-dark">
                    My Projects
                    </h2>
                <div className="row pl-5">
                    <div className="col-md-4 text-dark">
                      <div class="card bg-light" style={{width: "18rem"}}> 
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6QxS3DAz0T4SWRLdkXKYbm0eEXxnm7MNgcQ&usqp=CAU" class="card-img-top" alt="..." />
                        <div class="card-body bg-light">
                        <h5 class="card-title text-center">Knowledge-Based Question and Answer system using Natural Language Processing</h5>
                        <p class="card-text">The objective of the project was to create a knowledge-based question answering system using Natural Language Processing techniques such as Named Entity Recognition, Dependency Parsing, Part of Speech Tagging, etc. Some of the tools I used in this project include PyTorch, Spacy, BERT, NLTK, etc.</p>
                      </div>
                   </div>
                </div>
                <div className="col-md-4 text-dark">
                <div class="card bg-light" style={{width: "18rem"}}> 
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6QxS3DAz0T4SWRLdkXKYbm0eEXxnm7MNgcQ&usqp=CAU" class="card-img-top" alt="..." />
                        <div class="card-body bg-light">
                        <h5 class="card-title text-center">Bitcoin prices predictor using Hidden Markov Models</h5>
                        <p class="card-text">Developed a model that predicts bitcoin prices using Hidden Markov Models by selecting the optimal number of States that could provide good prediction accuracy using the Bayesian Information Criterion technique.
                        </p>
                      </div>
                   </div>
                </div>
                <div className="col-md-4 text-dark">
                <div class="card bg-light" style={{width: "18rem"}}> 
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6QxS3DAz0T4SWRLdkXKYbm0eEXxnm7MNgcQ&usqp=CAU" class="card-img-top" alt="..." />
                        <div class="card-body bg-light">
                        <h5 class="card-title text-center">Detection of Malicious Websites Using Machine Learning Techniques</h5>
                        <p class="card-text">Explored the use of ten machine learning models to classify malicious websites based on lexical features and examined how they generalize across various datasets. To complete the project, I trained, validated, and tested these models on different sets of datasets, then carried out the cross-datasets analysis.</p>
                      </div>
                   </div>
                </div>
            </div>
                   
                {/* <div class="card" style={{width: "18rem"}}> 
                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6QxS3DAz0T4SWRLdkXKYbm0eEXxnm7MNgcQ&usqp=CAU" class="card-img-top" alt="..." />
                      <div class="card-body">
                         <h5 class="card-title">Card title</h5>
                         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      </div>
                </div> */}

                {/* {
                    [1, 2, 3].map((_, key) => (
                        <div key={key} className="work-box row mb-4">
                            <div className="col-md-5">
                                <div className="img-box">
                                    <img src="https://nythonore.me/work/whatsapp.png" alt="" className="img-fluid" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <h2 className="font-sz-24 font-wg-700 color-white mb-2">WhatsApp Clone - UI</h2>
                                <p className="font-sz-16 font-wg-300 color-white">Academic . Fullstack . 2022</p>

                                <p className="font-sz-16 font-wg-300 color-white mt-4 mb-5">Hello there today I'm going to show you my latest work on frontend, hope you enjoy it</p>

                                <button className="btn btn-default button-box bg-white color-dark px-5 py-2 font-sz-14 font-wg-700">See Work</button>
                            </div>
                        </div>
                    ))
                } */}
            </div>
        </div>
    )
}

export default Work;