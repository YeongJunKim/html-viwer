# https://coderslegacy.com/python/pyqt6-qwebengineview-web-browser/
from PyQt5.QtWidgets import QApplication, QWidget, QVBoxLayout
from PyQt5.QtWebEngineWidgets import QWebEngineView
from PyQt5.QtCore import QUrl

app = QApplication(["df"])
window = QWidget()
layout = QVBoxLayout()

view = QWebEngineView()
layout.addWidget(view)

# view.setUrl(QUrl("https://www.google.com/"))
# view.setHtml(open("/Users/colson/workspace/html/html_viewer/data/add-curved-parent-artery-0fd1cf1/2_0.html").read())
view.setUrl(QUrl("http://localhost:8000/2_0.html"))
# view.setHtml(open("./index.html").read())


window.setLayout(layout)
window.show()

app.exec()
