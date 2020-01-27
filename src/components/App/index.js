import React, { useState } from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom'
import './index.sass'

// COMPONENTS
import Landing from '../Landing'
import Search from '../Search'
import Results from '../Results'
import ResultItem from '../Result-item'
import Detail from '../Detail'

// LOGIC    
import logic from '../../logic'
const { searchGnomes, retrieveGnome } = logic

// STATES
export default withRouter(function ({ history }) {
    const [error, setError] = useState()
    const [gnomes, setGnomes] = useState([])
    const [gnome, setGnome] = useState()

    // LANDING
    function handleGoToMain() { history.push('/search') }

    // SEARCH
    async function handleSearch(query, criteria) { 
        try { 
            setGnomes(await searchGnomes(query, criteria))
            
        } catch (error) {
            const { message } = error
            setError(message)
        }
    }

    // DETAIL
    async function handleDetail(id) {
        try {
            const item = await retrieveGnome(id)

            setGnome(item)  
            history.push('/detail') 
        } catch (error) {
            const { message } = error
            setError(message)
        }
    }
    
    // BACK TO SEARCH
    function handleBackToSearch() { history.push('/search') }

    return (
            <>
                <Route exact path="/" render={() => <Redirect to="/landing" /> }/>
                <Route path="/landing" render={() => <Landing onMainPage={handleGoToMain} error={error} /> }/> 
                <Route path="/search" render={() => <Search  onSearch={handleSearch} gnomes={gnomes} error={error} 
                        onResultsRender={gnomes => <Results items={gnomes} onItemRender={item => <ResultItem item={item} 
                        key={item.id} onClick={handleDetail} />} />} />} />
                <Route path="/detail" render={() => <Detail item={gnome} onBack={handleBackToSearch}  />} /> 
        </>
    )
})

