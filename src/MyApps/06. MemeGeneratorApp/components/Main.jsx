import "../styles/main.css";

export default function Main()
{
  return(
    <main className="meme-generator-main">
      <form className="meme-generator-form-container">
        <div className="meme-generator-form-row">
          <div>
            <label>Top Text</label>
            <br/>
            <input type="text" />
          </div>

          <div>
            <label>Bottom Text</label>
            <br/>
            <input type="text" />
          </div>
        </div>
        
        <button>Generate Meme</button>
      </form>
    </main>
  );
}