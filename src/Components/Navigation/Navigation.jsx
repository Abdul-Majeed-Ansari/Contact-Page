import logo from "../../assets/logo.png";
import styles from "../../Components/Navigation/Navigation.module.css";

const Navigation = () => {
  const links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "CONTACT", link: "/" },
  ];
  return (
    <>
      <div className={`container ${styles.navigation}`}>
        <div>
          <img src={logo} alt="logo_deisgn" />
        </div>
        <ul className={styles.navigator}>
          {links.map((link, id) => (
            <li key={id}>
              <a href="/">{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navigation;
