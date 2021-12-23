import React from 'react';
import { getRepos } from '../../data/data';
import styles from './Search.module.scss';

export default function Search () {
  let repos = getRepos()
  return(
    <div className={styles.Search}>
     <div className={styles.SearchForm}>
          <form>
            <input placeholder='Typing to search user or repositories' type="text" className={styles.FormControl}/>
            <select>
              <option value="users">Users</option>
              <option value="repos">Repositories</option>
            </select>
          </form>
        </div>
        <div className={styles.CardLists}>
           {repos.map(repo => 
            <div className={styles.CardItem}>
             <div className={styles.Item}>
                <img src={repo.image} alt="" />
                <div className={styles.Properties}>
                  <strong>{repo.name}</strong> <br />
                 <small> {repo.author}</small>
                </div>
             </div>
            </div>
             )}
        </div>
    </div>
  )
} ;
