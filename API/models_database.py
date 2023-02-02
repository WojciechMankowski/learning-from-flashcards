from sqlalchemy import String, Integer, Column, ForeignKey

from database import Base


class User(Base):
    __tablename__ = "user"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String)
    password = Column(String)
    email = Column(String)

class Flascard(Base):
    __tablename__ = "flascard"

    id = Column(Integer, primary_key=True, index=True)
    question= Column(String)
    answer= Column(String)
    lavel = Column(String)

class Flascards(Base):
    __tablename__ = "flascards"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    id_user = Column(Integer, ForeignKey("user.id"))
    id_card = Column(Integer, ForeignKey("flascard.id"))
