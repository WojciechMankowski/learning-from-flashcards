from fastapi import Depends
from sqlalchemy import select
from sqlalchemy.orm import sessionmaker

from database import engine
from main import get_db
from models_database import *

Session = sessionmaker(engine)
session = Session()
name="IT"
id = 1
db = Depends(get_db)
# res = Query(Flascards).filter(Flascards.name==name and Flascards.id_user==id)
select_ = select(Flascards).where(Flascards.name==name and Flascards.id_user==id)
result = session.execute(select_)
for item in result.scalars():
    print(item.name)
    print(type(item))
result=  session.query(Flascards).join(Flascard).filter(Flascards.name==name and Flascards.id_user==id)
for item in result:
    for i in item:
        print(i)
