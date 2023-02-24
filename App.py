from flask import Flask, render_template, url_for, request, jsonify

app = Flask(__name__)

list = []
id = 0

@app.route("/")
def hello_world():
    return render_template('index.html')

@app.route('/process', methods=['POST'])
def process():

    global id
    id += 1
    user_id = id
    name = request.form['name']
    email = request.form['email']
    tel = request.form['telefone']
    cep = request.form['cep']
    log = request.form['log']

    list.append({'id': user_id, 'userName': name, 'userEmail': email, 'userPhone': tel, 'userCEP': cep, 'userLog': log})

    return jsonify({'id': user_id, 'name': name, 'email': email, 'telefone': tel, 'cep': cep, 'log': log})

@app.route("/deletar/<id>")
def deletar(id):
    
    for i in list:
        print(list[])

    return "<h1>deletar</h1>"

if __name__ == "__main__":
    app.run(debug=True)