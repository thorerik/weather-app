var React = require('react');
var {Link} = require('react-router');

var Examples = () => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Meow meow meow 😱 🐈 ❤️</p>
      <ol>
        <li><Link to="/?location=Oslo">Oslo, Norway</Link></li>
        <li><Link to="/?location=Asdakjsd">Asdakjsd, Dafuqistan</Link></li>
        <li><Link to="/?location=Sun">Sun, Solarsystem</Link></li>
        <li><Link to="/?location=Moon">Moon, Solarsystem</Link></li>
        <li><Link to="/?location=Meow">Meow, Dafuqistan</Link></li>
      </ol>
    </div>
  );
}
module.exports = Examples;
