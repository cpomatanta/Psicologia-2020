from flask import Flask
from flask import render_template
from flask import request
from flask_sqlalchemy import SQLAlchemy
# from sassutils.wsgi import SassMiddleware
import db
from models import Paciente
from models import Diagnostico
import os

project_dir = os.path.dirname(os.path.abspath(__file__))
database_file = "sqlite:///{}".format(os.path.join(project_dir, "databases/test.db"))
app = Flask(__name__)

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = database_file


# app.wsgi_app = SassMiddleware(app.wsgi_app,{
#    'myapp':('static/sass','static/css','/static/css')
# })

@app.route('/')
def home():
    return render_template('index.html')


@app.route('/paciente', methods=['POST'])
def RegistrarPaciente():
    ps = db.session.query(Paciente).filter_by(dni=request.form['dni']).first()

    if ps is not None:
        id = ps.id
        db.session.commit()
    else:
        db.session.commit()
        paciente = Paciente(nombre=request.form['nombre'], dni=request.form['dni'])
        db.session.add(paciente)
        db.session.commit()
        id = paciente.id

    return render_template('preguntas.html', dni=request.form["dni"], id=id)


@app.route("/diagnostico", methods=['POST'])
def RegistrarDiagnostico():
    datos = request.get_json()
    diagnostico = Diagnostico(DimL=datos['DimL'], DimN=datos['DimN'], DimE=datos['DimE'], paciente=datos['id'])
    db.session.add(diagnostico)
    db.session.commit()
    return render_template('resumen.html')


if __name__ == 'main':
    db.Base.metadata.drop_all(bind=db.engine)
    db.Base.metadata.create_all(bind=db.engine)
    app.run(host='0.0.0.0', port=5000, debug=True)
