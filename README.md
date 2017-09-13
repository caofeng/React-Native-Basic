# React-Native-Basic
React Native 从入门到熟练

主要介绍RN基础组件的使用

### 1.环境搭建###

使用React Native开发iOS应用需要OSX系统，Xcode，Homebrew，node，npm，也可以有选择的使用watchman 、Flow。

#### 1.安装Homebrew####

打开终端，运行一下语句：

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

运行完成查看是否安装成功，终端运行一下语句：

```
brew -v
```

#### 2.使用Homebrew安装Node.js####

终端运行一下语句：

```
brew install node
```

#### 3.安装React Native 的命令行工具####

终端运行一下命令：

```
npm install -g react-native-cli
```

若出现错误，则使用一下语句进行安装：

```
sudo npm install -g react-native-cli
```

### 2.推荐安装工具###

#### 1.Watchman####

> Watchman是由Facebook提供的监视文件系统变更的工具。安装此工具可以提高开发时的性能（packager可以快速捕捉文件的变化从而实现实时刷新）。

终端运行一下语句：

```
brew install watchman
```

#### 2.Flow####

终端运行语句安装：

```
brew install flow
```

### 3.React Native 开发之IDE###

可以直接用自己喜欢的编辑器进行编辑。
React Native官方推荐了三种IDE编写React Native应用:
1)**Atom和Nuclide**
2)**WebStorm**
3)**Sublime Text**
4)**VSCode＋React Native Tools**



