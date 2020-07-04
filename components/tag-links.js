import Colors from "./colors";

export const TagNames = {
  JAVASCRIPT: "javascript",
  PYTHON: "python",
  REACT: "react",
  LEARNING: "learning",
  DOCKER: "docker",
  POSTGRES: "postgres",
  AWS: "aws"
};

export const TagColors = {
  [TagNames.JAVASCRIPT]: Colors.orange,
  [TagNames.PYTHON]: Colors.limeGreen,
  [TagNames.REACT]: Colors.fuschia,
  [TagNames.LEARNING]: Colors.darkBlueGreen,
  [TagNames.DOCKER]: Colors.purple,
  [TagNames.POSTGRES]: Colors.red,
  [TagNames.AWS]: Colors.lightBlue
};
