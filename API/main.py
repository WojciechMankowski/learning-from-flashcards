from fastapi import FastAPI, Depends, HTTPException
from database import engine, sessionLocal
import models_database
from models import Flashcard, Flashcards, UserModel

app = FastAPI()
models_database.Base.metadata.create_all(bind=engine)

def get_db():
    try:
        db = sessionLocal()
        yield db
    finally:
        db.close()

@app.get("/users")
def get_user(db: sessionLocal = Depends(get_db)):
    return db.query(models_database.User).all()

@app.get("/user/{id}")
def get_user(id: int, db: sessionLocal = Depends(get_db)):
    user_model = db.query(models_database.User).filter(models_database.User.id==id).first()
    if user_model is None:
        raise HTTPException(
            status_code=404,
            detail=f"ID {id} : Does not exist"
        )
    return user_model

@app.post("/add_user")
def add_user(user: UserModel, db: sessionLocal = Depends(get_db)):
    userModel = models_database.User()
    userModel.username = user.username
    userModel.password = user.password
    userModel.email = user.email
    db.add(userModel)
    db.commit()
    return userModel

@app.get("/set/{id_user}/{name_set}")
def get_set(name_set: str, id_user: int, db: sessionLocal = Depends(get_db)):
    cards_model = db.query(models_database.Flascards).\
        filter(models_database.Flascards.name == name_set and models_database.Flascards.id_user == id_user)\
        .first()
    print(cards_model)
    return cards_model

@app.post("/add_set/{id_user}/{name_set}")
def addNewSet(name_set: str, id_user: int, db: sessionLocal = Depends(get_db)):
   newSet = models_database.Flascards()
   newSet.name = name_set
   newSet.id_user = id_user
   newSet.id_card = None
   db.add(newSet)
   db.commit()
   return newSet

@app.post("/add_card/{id_set}/{name_set}")
def add_card(card: Flashcard,id_set: int,  name_set: str, db: sessionLocal = Depends(get_db)):
    card_db = models_database.Flascard()
    card_db.question = card.question
    card_db.answer = card.answer

    return card
