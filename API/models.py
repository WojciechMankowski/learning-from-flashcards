from typing import List
from pydantic import BaseModel, validator

class UserModel(BaseModel):
    username: str
    password: str
    email: str

    @validator('password')
    def passwords_match(cls, v, values, **kwargs):
        if 'password' in values or v == values["username"] :
            raise ValueError('The password cannot contain "password" and cannot be the same as the username')
        return v

    # @validator("email")
    # def email_check(cls, v, values):
    #     print(v, values)
    #     regex = re.compile(r'([A-Za-z0-9]+[.-_])*[A-Za-z0-9]+@[A-Za-z0-9-]+(\.[A-Z|a-z]{2,})+')
    #     print(re.fullmatch(regex, v))
    #     if re.fullmatch(regex, v):
    #         raise ValueError("Invalid email")
    #     return v

class Flashcard(BaseModel):
    question: str
    answer: str

    @validator('answer')
    def answer_match(cls, v, values, **kwargs):
        print(v, values)
        if v == values["question"]:
            raise ValueError('The answer cannot be the same as the question')
        return v

class Flashcards(BaseModel):
    name: str
    flashcards: List[Flashcard] = []
