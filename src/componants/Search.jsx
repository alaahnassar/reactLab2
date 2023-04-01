import React,  { useState } from "react";
export default function Search() {
    const searchData = [
        { id: 1, title: 'alaa ' },
        { id: 2, title: 'toka ' },
        { id: 3, title: 'esraa' },
        { id: 4, title: 'nour ' },
      ];
        const [query, setQuery] = useState('');
        const [error, setError] = useState(null);
    
        
        const handleInputChange = (event) => {
          setQuery(event.target.value);
        };
        
        const filteredData = searchData.filter((item) => {
            if(!item){
                // error="there are no items"
                // return error
                setError(error)
            }else{
        
             return item.title.toLowerCase().includes(query.toLowerCase());
            }
        });
        
        return (
          <div className="w-50 mx-auto">
             <div className="container mt-3">
             <label className="form-label">Search</label>
            <input type="text" className="form-control" value={query} onChange={handleInputChange} />
            {/* <span className="text-danger">{error.message}</span> */}
            {error && <div>{error.message}</div>}
            {filteredData.map((item)=>(
                  <div className="card py-2 my-4">
                    <div className="card-body">
                      <p className="card-title">{item.title}</p>
                    </div>
                   
                  </div>        
            )
            )}
             </div>
          </div>
        );
        
}


