import React, { useState } from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom'
import './index.sass'

// COMPONENTS
import Landing from '../Landing'
import Search from '../Search'

// LOGIC    
import {
    searchGnomes
} from '../../logic'
debugger
// STATES
export default withRouter(function ({ history }) {
    const [error, setError] = useState()


    // LANDING

    function handleGoToMain() { history.push('/search') } 
    
    // SEARCH

    async function handleSearch(event) {
        const query = event.target.query.value
        if(query) {
            try {
                debugger
                searchGnomes(query)

            } catch (error) {
                setError(error)
            }
        } else {
            searchGnomes()
        }
    }

    // CLOSE ERROR
    function handleOnClose() { 
        setError(undefined)
   }


    return (
            <>
                <Route exact path="/" render={() => <Redirect to="/landing" /> }/>
                <Route path="/landing" render={() => <Landing onMainPage={handleGoToMain} error={error} onClose={handleOnClose} /> }/> 
                <Route path="/search" render={() => <Search onSearch={handleSearch}  /> }/> 

                {/* <Route path="/search" render={() => <> 
                        <Search onSubmit={handleSearch} results={gnomes} error={error} 
                        onResultsRender={results => <Results items={results} onItemRender={item => <ResultItem item={item} 
                        key={item.id} onClick={handleDetail} />} />} />
                    </>} />
                 */}

                {/* <Route path="detail" render={() => <Detail item={duck} onBack={handleBackToSearch} onClick ={handleLogout}  />} /> */}
        </>
    )

})

