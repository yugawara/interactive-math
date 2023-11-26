# Linear Transformation Diagramming Tool

This project is a diagramming tool that leverages physical properties to illustrate linear transformations. It is designed to provide a visual understanding of complex mathematical concepts through interactive diagrams.

## Getting Started

Follow these instructions to set up the project on your local machine for development and testing purposes.

### Prerequisites

Before starting, ensure you have the following installed:
- Google Chrome (latest version recommended)
- Node.js and npm (if using `npx live-server`)

### Installation

Clone the repository to your local machine:
```sh
git clone https://github.com/yourusername/linear-transformation.git
```

Navigate to the project directory:
```sh
cd linear-transformation
```

### Running the Project

You have two options to run the project:

#### Option 1: Using Google Chrome

Execute the following command from the root of your project to open the diagramming tool in Google Chrome with the necessary flags for development:

```sh
google-chrome --user-data-dir="/tmp/chrome_dev_session" --disable-web-security --disable-site-isolation-trials "file:///home/yasu/co/linear-transformation/index.html" 2>/dev/null
```

**Note:** This command will launch Google Chrome with specific security features disabled to facilitate development. It should not be used for regular browsing or in production environments.

#### Option 2: Using live-server

If you have Node.js installed, you can use `live-server` for a quick setup with live reloading:

```sh
npx live-server .
```

This command will serve your project on a local server and automatically open it in your default web browser.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **Your Name** - *Initial work* - [YourGithubProfile](https://github.com/YourGithubProfile)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

* Hat tip to anyone whose code was used as inspiration.
* Special thanks to contributors and supporters of the project.