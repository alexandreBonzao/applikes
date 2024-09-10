import styles from './Post.module.css';

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img 
                        className={styles.avatar}
                        src="https://github.com/alexandreBonzao.png"
                    />
                    <div className={styles.authorInfo}>
                        <strong>Alexandre</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title='10 de Setembro as 09:44h' datatype="2024/09/10 09:44:00">Publicado há 1 hora</time>
            </header>
            <div className={styles.content}>
                <p>Fala Galera !!!</p>
                <p>Amanha teremos viagem a Bienal !!!</p>
                <p>
                    <a href="">#bienaldolivrosp</a>{' '}
                    <a href="">#eteccidadedolivro</a>{' '}
                    <a href="">#vempraetec</a>{' '}
                </p>
            </div>
        </article>
    )
}