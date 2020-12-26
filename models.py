import db
from sqlalchemy import Column, Integer, String, Float


class Paciente(db.Base):
    __tablename__ = 'Pacientes'
    id = Column(Integer, primary_key=True)
    nombre = Column(String(45))
    dni = Column(String(8))


class Diagnostico(db.Base):
    __tablename__ = 'Diagnostico'
    id = Column(Integer, primary_key=True)
    DimL = Column(Integer)
    DimE = Column(Integer)
    DimN = Column(Integer)
    paciente = Column(Integer)
