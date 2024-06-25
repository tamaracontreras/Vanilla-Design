// eslint-disable-next-line no-unused-vars
import React from "react";
import "../../styles/Cards.scss"; // Asegúrate de que la ruta al archivo CSS sea correcta

// Asegúrate de instalar react-icons si no lo has hecho

const Cards = () => {
  const cardData = [
    {
      id: 1,
      title: "Item 1",
      text: "Aún nuestro sitio está en construcción (somos muy perfeccionistas jeje). Mientras puedes navegar en nuestro sitio antiguo.",
    },
    {
      id: 2,
      title: "Item 2",
      text: "Aún nuestro sitio está en construcción (somos muy perfeccionistas jeje). Mientras puedes navegar en nuestro sitio antiguo.",
    },
    {
      id: 3,
      title: "Item 3",
      text: "Aún nuestro sitio está en construcción (somos muy perfeccionistas jeje). Mientras puedes navegar en nuestro sitio antiguo.",
    },
  ];

  return (
    <div className="container-lg">
    <div className="cards-container">

      {cardData.map((card) => (
        
        <div key={card.id} className="card container-sm</div>">
          <svg
            width="99"
            height="98"
            viewBox="0 0 99 98"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2_54)">
              <path
                d="M54.0449 85.3676C52.8444 84.3109 51.6364 83.2574 50.437 82.1981C48.5223 80.5063 46.5521 78.8725 44.7197 77.0963C42.8512 75.2863 40.7713 73.9005 38.2961 73.0716C37.1401 72.6834 36.0345 72.1443 34.7915 71.626L30.8599 81.056L22.1296 77.4161L26.0723 67.9595C22.5723 66.7815 19.5478 64.7488 15.748 64.7111C11.6601 64.6719 7.57645 64.2315 3.48941 63.9647C3.18059 63.9453 2.87308 63.9077 2.46828 63.8701C2.58626 63.5194 2.66314 63.2297 2.77632 62.9582C5.0585 57.4769 7.35671 52.0022 9.61215 46.5098C9.89689 45.8193 10.2285 45.5733 10.9985 45.6381C13.7884 45.8703 16.5875 45.9751 19.3739 46.2307C20.2866 46.3145 20.6429 46.0319 20.9058 45.198C22.8585 39.0169 25.7829 33.3347 29.8055 28.2322C33.8745 23.071 38.7689 18.835 44.5118 15.6495C47.6841 13.8884 51.0382 12.4438 54.3113 10.8623C54.4958 10.7736 54.6985 10.7238 54.7125 10.7203C55.4779 12.3766 56.3471 13.9418 56.9442 15.6029C59.721 23.3246 61.0868 31.2548 60.3288 39.4773C59.7032 46.2835 57.6631 52.6593 54.6131 58.7328C53.8815 60.1867 53.8398 60.1662 55.078 61.2605C57.0978 63.0461 59.127 64.8169 61.1131 66.6385C61.3697 66.8735 61.6002 67.457 61.4874 67.7349C59.1057 73.5528 56.6706 79.3484 54.2434 85.1473C54.219 85.2059 54.1534 85.2504 54.0438 85.3702L54.0449 85.3676ZM35.9839 68.7209C37.9539 69.5423 39.7829 70.258 41.5682 71.071C42.288 71.3992 42.6906 71.2765 43.1185 70.6489C45.3933 67.3077 47.8215 64.0649 49.9592 60.6385C52.7074 56.2293 54.6523 51.4291 55.9268 46.393C57.8801 38.6751 57.9 30.9134 55.9527 23.1813C55.2392 20.347 54.2863 17.5752 53.4676 14.8501C53.1528 14.8376 53.0757 14.8117 53.0179 14.8376C45.1104 18.2703 38.1048 22.9414 32.6487 29.6988C25.1153 39.03 21.9884 50.0295 20.6647 61.6934C20.6363 61.9347 20.7932 62.3562 20.9765 62.4358C23.0219 63.3323 25.0911 64.1794 27.2723 65.0888L30.5459 57.2371L39.2601 60.8703L35.9854 68.7247L35.9839 68.7209ZM19.4706 49.3703C17.2875 49.2256 15.12 49.1186 12.964 48.9163C12.2183 48.846 11.9325 49.1174 11.6716 49.7584C10.2628 53.2201 8.80861 56.6628 7.37313 60.1134C7.25994 60.3848 7.18685 60.673 7.06755 61.0419C10.5821 61.267 13.9887 61.4876 17.3014 61.7002C18.0362 57.5295 18.7462 53.486 19.4717 49.3677L19.4706 49.3703ZM52.9089 80.1826C54.5757 76.1849 56.1816 72.3555 57.7518 68.5144C57.8405 68.3014 57.7536 67.8778 57.5911 67.7257C55.8716 66.1528 54.1195 64.6131 52.427 63.1108C49.993 66.548 47.6088 69.9185 45.1879 73.3393C47.7157 75.5774 50.2467 77.8229 52.9089 80.1826ZM32.3114 61.3412L26.3047 75.7483L29.058 76.8962L35.0647 62.4891L32.3114 61.3412Z"
                fill="#FF93F4"
              />
              <path
                d="M51.9299 42.1241C50.0229 46.8183 44.5923 49.0968 39.8321 47.1934C35.0665 45.2877 32.7518 39.8143 34.6936 35.044C36.6154 30.3216 42.1818 28.0185 46.8916 29.9978C51.5933 31.9737 53.8475 37.3968 51.9272 42.123L51.9299 42.1241ZM48.9546 41.0648C50.3355 37.9633 48.899 34.312 45.7468 32.9165C42.7005 31.5684 39.0314 33.016 37.6705 36.1071C36.3073 39.2035 37.7024 42.8188 40.7931 44.1886C43.9601 45.5934 47.5514 44.2195 48.9572 41.0659L48.9546 41.0648Z"
                fill="#FF93F4"
              />
              <path
                d="M48.9087 21.2536L51.694 22.4149L49.7199 27.1499L46.9346 25.9886L48.9087 21.2536Z"
                fill="#FF93F4"
              />
              <path
                d="M39.6684 51.2585C39.5855 51.5176 39.5213 51.7845 39.4181 52.032C38.8919 53.3092 38.3577 54.583 37.795 55.9324L34.9723 54.7555L36.9098 50.1084L39.6657 51.2574L39.6684 51.2585Z"
                fill="#FF93F4"
              />
            </g>
            <circle
              cx="78.6434"
              cy="56.1368"
              r="8.01063"
              transform="rotate(22.6326 78.6434 56.1368)"
              fill="#FF93F4"
            />
            <defs>
              <clipPath id="clip0_2_54">
                <rect
                  width="56.0744"
                  height="74.0983"
                  fill="white"
                  transform="translate(29) rotate(22.6326)"
                />
              </clipPath>
            </defs>
          </svg>

          <h1 className="card-title">{card.title}</h1>
          <p className="card-text">{card.text}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Cards;
